// import { render, screen } from '@testing-library/react';
import React from "react";
import { render, screen, fireEvent, waitFor } from "test-utils";
import user from "@testing-library/user-event";

import SignIn from "components/user/SignIn";

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

test("login button is disabled initially", () => {
  render(<SignIn />);
  const loginButton = screen.getByRole("button", {
    name: /login/i,
  });
  expect(loginButton).toBeDisabled();
});

test("login button is enabled once email and password field filled", () => {
  render(<SignIn />);
  const emailInput = screen.getByPlaceholderText("Email");
  user.type(emailInput, "test123@gmail.com");

  const passwordInput = screen.getByPlaceholderText("Password");
  user.type(passwordInput, "abc123");

  const loginButton = screen.getByRole("button", {
    name: /login/i,
  });
  expect(loginButton).toBeEnabled();
});

it("should show error message when login fails", async () => {
  render(<SignIn />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const loginButton = screen.getByRole("button", { name: /login/i });
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });
  fireEvent.click(loginButton);
  const errorMessage = await waitFor(() =>
    screen.findByText("Invalid email / password combo")
  );
  expect(errorMessage).toBeVisible();
});

// FIX SCHEMA RETURNED BY MSW
it("should redirect to dashboard on successful login", async () => {
  render(<SignIn />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const loginButton = screen.getByRole("button", { name: /login/i });
  fireEvent.change(emailInput, { target: { value: "amit@profitswami.com" } });
  fireEvent.change(passwordInput, { target: { value: "neca8735" } });
  fireEvent.click(loginButton);
  const heading = await waitFor(() =>
    screen.findByText("Logged in as amit@profitswami.com")
  );
  expect(heading).toBeVisible();
});
