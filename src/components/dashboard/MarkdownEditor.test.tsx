import React from "react";
import { render, screen } from "@testing-library/react";
import MarkdownEditor from "components/dashboard/MarkdownEditor";

jest.mock("@uiw/react-md-editor", () => () => <div></div>);
jest.mock("rehype-sanitize", () => () => <div></div>);

test("that markdown editor is loading", () => {
  render(
    <MarkdownEditor content="hello" setContent={() => console.log("hi")} />
  );
  const linkElement = screen.getByTestId(/markdown-editor/i);
  expect(linkElement).toBeInTheDocument();
});
