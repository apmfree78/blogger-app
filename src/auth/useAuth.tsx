import axios, { AxiosResponse } from "axios";

import { User } from "shared/types";
import { axiosInstance } from "axiosInstance";
import { customToast } from "components/hooks/useToast";
import { useUser } from "user/hooks/useUser";

interface UseAuth {
  signin: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  signout: () => void;
}

type UserResponse = { user: User };
type ErrorResponse = { message: string };
type AuthResponseType = UserResponse | ErrorResponse;

export function useAuth(): UseAuth {
  const SERVER_ERROR = "There was an error contacting the server.";
  const { clearUser, updateUser } = useUser();

  async function authServerCall(
    urlEndpoint: string,
    email: string,
    password: string,
    passwordConfirm?: string
  ): Promise<void> {
    let requestData: object; // body of request , holds email , password etc

    // if sign up passwordConfirm exists, other wise it's a user sign in
    if (passwordConfirm) requestData = { email, password, passwordConfirm };
    else requestData = { identity: email, password };

    try {
      const { data, status }: AxiosResponse<AuthResponseType> =
        await axiosInstance({
          url: urlEndpoint,
          method: "POST",
          data: requestData,
          headers: { "Content-Type": "application/json" },
        });

      if (status === 400) {
        const message = "message" in data ? data.message : "Unauthorized";
        customToast(message, "is-warning");
        return;
      }

      if ("user" in data && "token" in data.user) {
        customToast(`Logged in as ${data.user.email}`, "is-success");

        // update stored user data
        updateUser(data.user);
      }
    } catch (errorResponse) {
      let message = SERVER_ERROR; //default error message

      if (axios.isAxiosError(errorResponse) && errorResponse?.response?.data)
        message = errorResponse?.response?.data?.message;

      customToast(SERVER_ERROR, "is-warning");
    }
  }

  async function signin(email: string, password: string): Promise<void> {
    authServerCall("/collections/users/auth-with-password", email, password);
  }
  async function signup(
    email: string,
    password: string,
    passwordConfirm: string
  ): Promise<void> {
    authServerCall(
      "/collections/users/records",
      email,
      password,
      passwordConfirm
    );
  }

  function signout(): void {
    // clear user from stored user data
    clearUser();
    customToast("Logged out!", "is-info");
  }

  // Return the user object and auth methods
  return {
    signin,
    signup,
    signout,
  };
}
