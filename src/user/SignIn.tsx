import { useAuth } from "auth/useAuth";
import { useState } from "react";
import { useUser } from "user/hooks/useUser";
import "styles/SignUpSignIn.css";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h2 className="title is-3">Sign In to Your Account</h2>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" required placeholder="Email" />
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
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>

      <div className="field">
        <p className="control">
          <button className="button is-success">Login</button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
