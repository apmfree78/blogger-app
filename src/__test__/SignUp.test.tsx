// import { render, screen } from '@testing-library/react';
import React from "react";
import { render, screen } from "test-utils";
import user from "@testing-library/user-event";

import SignUp from "user/SignUp";

test("Sign In Form Appears", () => {
  render(<SignUp />);
  const element = screen.getByRole("form");
  expect(element).toBeInTheDocument();
});

test("header appears", () => {
  render(<SignUp />);
  const headerElement = screen.getByRole("heading", {
    name: /sign up for free/i,
  });
  expect(headerElement).toBeInTheDocument();
});

test("user email input appears on screen", () => {
  render(<SignUp />);
  const emailInput = screen.getByPlaceholderText("Email");
  user.type(emailInput, "test123@gmail.com");
  expect(emailInput).toHaveValue("test123@gmail.com");
});
