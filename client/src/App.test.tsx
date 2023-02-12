import { render, screen } from "@testing-library/react";
import App from "App";
import React from "react";

jest.mock("react-redux", () => ({
  useDispatch: () => {
    return null;
  },
  useSelector: () => {
    return null;
  },
}));

jest.mock("@uiw/react-md-editor", () => () => <div></div>);
jest.mock("rehype-sanitize", () => () => <div></div>);
test.skip("renders headline", () => {
  render(<App />);
  const linkElement = screen.getByRole("heading");
  expect(linkElement).toBeInTheDocument();
});
