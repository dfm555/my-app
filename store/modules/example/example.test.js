import exampleReducer from "./example"

describe("example Reducer", () => {
  it("Should return default state", () => {
    const newState = exampleReducer(undefined, {})
    expect(newState).toEqual({ loading: false })
  })
})
