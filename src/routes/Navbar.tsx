import { Link } from "react-router-dom";
import "styles/Navbar.css";

const Navbar = () => {
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
        <Link to="/" style={linkStyle}>
          Sign Out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
