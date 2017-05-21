import * as actionTypes from "./actionTypes";

//helper function to add script tag to body with uri as source
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

export const fetchDataStart = data => {
  return {
    type: actionTypes.FETCH_DATA_START
  };
};

export const fetchDataSuccess = data => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data
  };
};

export const fetchDataFailure = error => {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    payload: error
  };
};

//thunk used to fetch data (function that returns a function)
export function fetchData() {
  return function(dispatch) {
    dispatch(fetchDataStart());
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
