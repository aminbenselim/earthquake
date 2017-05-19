import * as actionTypes from "./actionTypes";

//the callback function used in the usgs website ;
function jsonP(uri) {
  return new Promise((resolve, reject) => {
    let object = {};
    global.eqfeed_callback = function(data) {
      object = data;
    };
    var tag = document.createElement("script");
    tag.src = uri;
    tag.async = true;
    tag.onload = () => {
      resolve(object);
    };
    document.getElementsByTagName("body")[0].appendChild(tag);
  });
}

export function fetchData() {
  return function(dispatch) {
    dispatch({ type: actionTypes.FETCH_DATA });
    return jsonP(
      "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp"
    )
      .then(data => {
        dispatch(fetchDataSuccess(data));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));

        //  throw error;
      });
  };
}

function fetchDataSuccess(data) {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data
  };
}

function fetchDataFailure(error) {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    payload: error
  };
}
