// import { render, screen } from '@testing-library/react';
import React from "react";
import { fireEvent, render, screen } from "test-utils";
import user from "@testing-library/user-event";

import SignUp from "components/user/SignUp";

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
  fireEvent.change(emailInput, { target: { value: 'test123@gmail.com' } })
  expect(emailInput).toHaveValue("test123@gmail.com");
});

test("login button is disabled initially", () => {
  render(<SignUp />);
  const loginButton = screen.getByRole("button", {
    name: /login/i,
  });
  expect(loginButton).toBeDisabled();
});

test("login button is enabled once email, password, and confirm password field filled", () => {
  render(<SignUp />);
  const emailInput = screen.getByPlaceholderText("Email");
  fireEvent.change(emailInput, { target: { value: 'test123@gmail.com' } })

  const passwordInput = screen.getByPlaceholderText("Password");
  fireEvent.change(passwordInput, { target: { value: 'abc123' } })

  const confirmPasswordInput = screen.getByPlaceholderText("Confirm Password");
  fireEvent.change(confirmPasswordInput, { target: { value: 'abc123' } })

  const loginButton = screen.getByRole("button", {
    name: /login/i,
  });
  expect(loginButton).toBeEnabled();
});
