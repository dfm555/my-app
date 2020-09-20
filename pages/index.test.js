import React from "react"
import { shallow } from "enzyme"
import { Index } from "./index"

describe("Index", () => {
  const Component = shallow(<Index />)

  it("Should be defined", () => {
    expect(Component).toBeDefined()
  })
})
