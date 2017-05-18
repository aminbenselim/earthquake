import * as actionTypes from "./actionTypes";

export function fetchData() {
  const request = fetch(
    "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp"
  );
  return {
    type: actionTypes.FETCH_DATA,
    payload: request
  };
}

export function fetchDataSuccess(data) {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data
  };
}

export function fetchDataFailure(error) {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    payload: error
  };
}
