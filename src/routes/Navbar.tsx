import { Link } from "react-router-dom";
import "styles/Navbar.css";
import { useAuth } from "auth/useAuth";

const Navbar = () => {
  const { signout } = useAuth();

  const linkStyle = {
    color: "white",
    fontWieght: "bold",
  };

  return (
    <nav role="navbar" className="navbar is-info is-fixed-top">
      <div className="navbar-item">
        <Link to="/" style={linkStyle}>
          Home
        </Link>
      </div>

      <div className="navbar-item">
        <Link to="/posts" style={linkStyle}>
          Posts
        </Link>
      </div>

      <div className="navbar-item">
        <div
          onClick={signout}
          onMouseOver={(e) => {
            e.currentTarget.style.cursor = "pointer";
          }}
          style={linkStyle}
        >
          Sign Out
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
