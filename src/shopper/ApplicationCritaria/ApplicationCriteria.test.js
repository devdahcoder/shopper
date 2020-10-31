import React from "react";
import { render, cleanup } from "@testing-library/react";
import ApplicationCriteria from "./ApplicationCriteria"


afterEach(cleanup)

it("should take a snapshot", () => {
    const {asFragment} = render(<ApplicationCriteria />)
    expect(asFragment(<ApplicationCriteria />)).toMatchSnapshot()
})



