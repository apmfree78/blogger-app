import { useAuth } from "auth/useAuth";
import { useState } from "react";
import { useUser } from "user/hooks/useUser";
import { customToast } from "components/hooks/useToast";
import {
  SignUpCredentials,
  SignUpCredentialsType,
  displayZodErrorToast,
} from "validation";
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
    return <div>{user.email}</div>;
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
    <div className="login">
      <h2 className="title is-3">Sign Up for Free</h2>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
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
            disabled={!email || !password}
            onClick={handleSignUpCredentials}
            className="button is-success"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
