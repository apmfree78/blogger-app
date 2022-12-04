// import { render, screen } from '@testing-library/react';
import React from "react";
import { render, screen } from "test-utils";
import user from "@testing-library/user-event";

import SignIn from "user/SignIn";

test("Sign In Form Appears", () => {
  render(<SignIn />);
  const element = screen.getByRole("form");
  expect(element).toBeInTheDocument();
});

test("header appears", () => {
  render(<SignIn />);
  const headerElement = screen.getByRole("heading", {
    name: /sign in to your account/i,
  });
  expect(headerElement).toBeInTheDocument();
});

test("user email input appears on screen", () => {
  render(<SignIn />);
  const emailInput = screen.getByPlaceholderText("Email");

  user.type(emailInput, "test123@gmail.com");
  expect(emailInput).toHaveValue("test123@gmail.com");
});
