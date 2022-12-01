import { useAuth } from "auth/useAuth";
import { useState } from "react";
import { useUser } from "user/hooks/useUser";
import {
  SignInCredentials,
  SignInCredentialsType,
  displayZodErrorToast,
} from "validation";
import { customToast } from "components/hooks/useToast";
import "styles/SignUpSignIn.css";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authenticate = useAuth();
  const { user } = useUser();

  // if already login, then redirect to main page
  if (user) {
    //redirect to main page
    return <div>{user.email}</div>;
  }

  const handleLoginCredentials = () => {
    // valide using zod
    const validationIs = SignInCredentials.safeParse({ email, password });

    if (!validationIs.success) {
      // display errors in toast
      displayZodErrorToast<SignInCredentialsType>(validationIs.error);
    } else {
      // submit credentials for authentication
      authenticate.signin(email, password);
    }
  };

  return (
    <div className="login">
      <h2 className="title is-3">Sign In to Your Account</h2>
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
        <p className="control">
          <button
            type="submit"
            disabled={!email || !password}
            onClick={handleLoginCredentials}
            className="button is-success"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
