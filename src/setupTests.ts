// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { baseUrl } from "axiosInstance/constants";

type SuccessResponse = {
  token: string;
};

type ErrorResponse = {
  message: string;
};

console.log("setting up servers");

const server = setupServer(
  rest.post<string, SuccessResponse | ErrorResponse, any>(
    `${baseUrl}collections/users/auth-with-password`,
    (req, res, ctx) => {
      console.log("intercepting server request");
      if (!!req) {
        const { email, password } = JSON.parse(req.body);
        if (email === "test@example.com" && password === "testpassword") {
          return res(ctx.status(200), ctx.json({ token: "testtoken" }));
        }
      }

      return res(
        ctx.status(401),
        ctx.json({ message: "Invalid email or password" })
      );
    }
  )
);

// Establish API mocking before all tests.
// beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
// afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
// afterAll(() => server.close());
