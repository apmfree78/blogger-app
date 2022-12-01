import { useAuth } from "auth/useAuth";
import { useState } from "react";
import { useUser } from "user/hooks/useUser";
import { customToast } from "components/hooks/useToast";
import { z } from "zod";
import "styles/SignUpSignIn.css";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authenticate = useAuth();
  const { user } = useUser();
  // zod schema for validation
  const Credentials = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "password must be 8 or more characters" }),
  });

  // if already login, then redirect to main page
  if (user) {
    //redirect to main page
    return <div>{user.email}</div>;
  }

  const handleLoginCredentials = () => {
    // valide using zod
    const validationIs = Credentials.safeParse({ email, password });

    if (!validationIs.success) {
      // parsing error messages
      const errorData = JSON.parse(validationIs.error.message);
      const errorMessages = errorData.map((error: any) => error.message);

      // toast for each error
      errorMessages.forEach((errorMessage: string) =>
        customToast(errorMessage, "is-warning")
      );
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
