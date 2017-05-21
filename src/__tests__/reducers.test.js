import dataReducer from "../reducers/reducers";

const MockStore = (data = [], error = null, loading = false) => {
  return { data, error, loading };
};

describe("data Reducers", () => {
  it("should return the initial state", () => {
    expect(dataReducer(undefined, {})).toEqual(MockStore());
  });

  it("should react to an action of type 'FETCH_DATA_START'", () => {
    expect(dataReducer(MockStore(), { type: "FETCH_DATA_START" })).toEqual(
      MockStore([], null, true)
    );
  });

  it("should react to an action of type 'FETCH_DATA_SUCCESS'", () => {
    const data = { features: "mock features" };
    expect(
      dataReducer(MockStore(), { type: "FETCH_DATA_SUCCESS", payload: data })
    ).toEqual(MockStore(data, null, false));
  });

  it("should react to an action of type 'FETCH_DATA_FAILURE'", () => {
    const error = { message: "this is an error" };
    expect(
      dataReducer(MockStore(), { type: "FETCH_DATA_FAILURE", payload: error })
    ).toEqual(MockStore([], error, false));
  });
});
