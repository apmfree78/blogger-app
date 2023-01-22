import React, { useState } from "react";
import { useAuth } from "auth/useAuth";
import { Link, Navigate } from "react-router-dom";
import { useUser } from "components/user/hooks/useUser";
import {
  SignUpCredentials,
  SignUpCredentialsType,
  displayZodErrorToast,
} from "validation";
import Layout from "layout";
import "styles/SignUpSignIn.css";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const authenticate = useAuth();
  const { user } = useUser();

  // if already login, then redirect to main page
  if (user) {
    //redirect to main page
    return <Navigate to="/" />;
  }

  const handleSignUpCredentials = () => {
    // valide using zod
    const validationIs = SignUpCredentials.safeParse({
      email,
      password,
      passwordConfirm,
    });

    if (!validationIs.success) {
      // display errors in toast
      displayZodErrorToast<SignUpCredentialsType>(validationIs.error);
    } else {
      // submit credentials for authentication
      authenticate.signup(email, password, passwordConfirm);
    }
  };

  return (
    <Layout>
      <div role="form" className="login">
        <h2 className="title is-3">Sign Up for Free</h2>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              value={password}
              required
              minLength={8}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              required
              minLength={8}
              placeholder="Confirm Password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control">
            <button
              type="submit"
              disabled={!email || !password || !passwordConfirm}
              onClick={handleSignUpCredentials}
              className="button is-success"
            >
              Login
            </button>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <Link to="/login">Have Account? Click Here to Login</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
