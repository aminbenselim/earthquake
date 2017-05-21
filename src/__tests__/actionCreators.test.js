import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure
} from "./../actions/actionCreators";

describe("fetchDataStart (action creator)", () => {
  it('should return an action of type "FETCH_DATA_START"', () => {
    expect(fetchDataStart().type).toEqual("FETCH_DATA_START");
  });
});

describe("fetchDataSuccess (action creator)", () => {
  it('should return an action of type "FETCH_DATA_SUCCESS"', () => {
    expect(fetchDataSuccess().type).toEqual("FETCH_DATA_SUCCESS");
  });
});

describe("fetchDataFailure (action creator)", () => {
  it('should return an action of type "FETCH_DATA_FAILURE"', () => {
    expect(fetchDataFailure().type).toEqual("FETCH_DATA_FAILURE");
  });
});
