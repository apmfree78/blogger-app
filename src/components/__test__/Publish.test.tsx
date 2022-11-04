// import { render, screen } from '@testing-library/react';
import { render, screen } from "../../test-utils";
import user from "@testing-library/user-event";

import Publish from "components/Publish";

jest.mock("@uiw/react-md-editor", () => () => <div></div>);
jest.mock("rehype-sanitize", () => () => <div></div>);

test("Submit to Hashnode button appears", () => {
  render(<Publish content="test content" />);
  const linkElement = screen.getByText("Submit to Hashnode");
  expect(linkElement).toBeInTheDocument();
});

test("Submit to Dev.to button appears", () => {
  render(<Publish content="test content" />);
  const linkElement = screen.getByText("Submit to Dev.to");
  expect(linkElement).toBeInTheDocument();
});

test("Submit to Medium button appears", () => {
  render(<Publish content="test content" />);
  const linkElement = screen.getByText("Submit to Medium");
  expect(linkElement).toBeInTheDocument();
});

test("Hashnode Modal is present", async () => {
  render(<Publish content="test content" />);

  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to hashnode/i,
  });
  await user.click(button);

  const header = screen.getByText(/hashnode input form/i);
  expect(header).toBeInTheDocument();

  // check that form appears for Hashnode
});
