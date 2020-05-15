import React from "react";
import  { render } from '@testing-library/react';
import * as rtl from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

it('testing wrapper', () => {
  const wrapper = rtl.render( 
    <span className="greet">hello world</span>
  );
  const element = wrapper.queryByText(/hello/i);

  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});