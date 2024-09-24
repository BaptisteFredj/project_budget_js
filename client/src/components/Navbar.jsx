import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({ authTools }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {authTools.auth == null ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <li>
            <button
              type="button"
              onClick={() => {
                authTools.setAuth(null);
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  authTools: PropTypes.shape({
    auth: PropTypes.shape({}),
    setAuth: PropTypes.func.isRequired,
  }).isRequired,
};
