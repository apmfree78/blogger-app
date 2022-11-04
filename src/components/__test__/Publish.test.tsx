// import { render, screen } from '@testing-library/react';
import React from "react";
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

// testing that modal is properly appearing after
// user clicks publish button
// testing Hashnode Modal
test("Hashnode Modal is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to hashnode/i,
  });
  await user.click(button);
  // check that form appears for Hashnode
  const header = screen.getByText(/hashnode input form/i);
  expect(header).toBeInTheDocument();
});

test("Hashnode Modal title label is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to hashnode/i,
  });
  await user.click(button);
  const title = screen.getByLabelText(/title/i);
  expect(title).toBeInTheDocument();
});

test("Hashnode Modal URL label is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to hashnode/i,
  });
  await user.click(button);
  const url = screen.getByLabelText(/url/i);
  expect(url).toBeInTheDocument();
});

test("Hashnode Modal tags label is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to hashnode/i,
  });
  await user.click(button);
  const tags = screen.getByText(/tags/i);
  expect(tags).toBeInTheDocument();
});

test("Hashnode Modal Submit button is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to hashnode/i,
  });
  await user.click(button);
  const submit = screen.getByRole("button", { name: /^submit$/i });
  expect(submit).toBeInTheDocument();
});

test("Hashnode Modal Cancel button is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to hashnode/i,
  });
  await user.click(button);
  const submit = screen.getByRole("button", { name: /^cancel$/i });
  expect(submit).toBeInTheDocument();
});

// testing that modal is properly appearing after
// user clicks publish button
// testing Medium Modal
test("medium Modal is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to medium/i,
  });
  await user.click(button);
  // check that form appears for medium
  const header = screen.getByText(/medium input form/i);
  expect(header).toBeInTheDocument();
});

test("medium Modal title label is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to medium/i,
  });
  await user.click(button);
  const title = screen.getByLabelText(/title/i);
  expect(title).toBeInTheDocument();
});

test("medium Modal URL label is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to medium/i,
  });
  await user.click(button);
  const url = screen.getByLabelText(/url/i);
  expect(url).toBeInTheDocument();
});

test("medium Modal tags label is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to medium/i,
  });
  await user.click(button);
  const tags = screen.getByText(/tags/i);
  expect(tags).toBeInTheDocument();
});

test("medium Modal Publish Status label is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to medium/i,
  });
  await user.click(button);
  const url = screen.getByLabelText(/publish status/i);
  expect(url).toBeInTheDocument();
});

test("medium Modal Submit button is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to medium/i,
  });
  await user.click(button);
  const submit = screen.getByRole("button", { name: /^submit$/i });
  expect(submit).toBeInTheDocument();
});

test("medium Modal Cancel button is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to medium/i,
  });
  await user.click(button);
  const submit = screen.getByRole("button", { name: /^cancel$/i });
  expect(submit).toBeInTheDocument();
});

// testing that modal is properly appearing after
// user clicks publish button
// testing devto Modal
test("devto Modal is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to dev/i,
  });
  await user.click(button);
  // check that form appears for devto
  const header = screen.getByText(/dev\.to input form/i);
  expect(header).toBeInTheDocument();
});

test("devto Modal title label is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to dev/i,
  });
  await user.click(button);
  const title = screen.getByLabelText(/title/i);
  expect(title).toBeInTheDocument();
});

test("devto Modal tags label is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to dev/i,
  });
  await user.click(button);
  const tags = screen.getByText(/tags/i);
  expect(tags).toBeInTheDocument();
});

test("devto Modal Publish Status label is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to dev/i,
  });
  await user.click(button);
  const url = screen.getByLabelText(/set article to published/i);
  expect(url).toBeInTheDocument();
});

test("devto Modal series label is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to dev/i,
  });
  await user.click(button);
  const title = screen.getByLabelText(/series/i);
  expect(title).toBeInTheDocument();
});

test("devto Modal Submit button is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to dev/i,
  });
  await user.click(button);
  const submit = screen.getByRole("button", { name: /^submit$/i });
  expect(submit).toBeInTheDocument();
});

test("devto Modal Cancel button is present", async () => {
  render(<Publish content="test content" />);
  // simulate button click
  const button = screen.getByRole("button", {
    name: /submit to dev/i,
  });
  await user.click(button);
  const submit = screen.getByRole("button", { name: /^cancel$/i });
  expect(submit).toBeInTheDocument();
});
