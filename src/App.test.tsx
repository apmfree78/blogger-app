import React from "react";
import { render, screen } from "@testing-library/react";
import App from "App";

jest.mock("react-redux", () => ({
  useDispatch: () => {
    return null;
  },
}));

jest.mock("@uiw/react-md-editor", () => () => <div></div>);
jest.mock("rehype-sanitize", () => () => <div></div>);
test("renders headline", () => {
  render(<App />);
  const linkElement = screen.getByRole("heading");
  expect(linkElement).toBeInTheDocument();
});
