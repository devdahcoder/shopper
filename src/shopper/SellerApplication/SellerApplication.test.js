import React from "react";
import { render, cleanup } from "@testing-library/react";
import SellerApplication from "./SellerApplication"


afterEach(cleanup)

it("should take a snapshot", () => {
    const {asFragment} = render(<SellerApplication />)
    expect(asFragment(<SellerApplication />)).toMatchSnapshot()
})