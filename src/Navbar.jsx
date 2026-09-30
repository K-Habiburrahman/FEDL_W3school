import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-links">

        <Link to="/html">
          HTML
        </Link>

        <Link to="/css">
          CSS
        </Link>

        <Link to="/javascript">
          JAVASCRIPT
        </Link>

        <Link to="/sql">
          SQL
        </Link>

        <Link to="/python">
          PYTHON
        </Link>

        <Link to="/java">
          JAVA
        </Link>

        <button className="more-languages">
          MORE
          <span>▼</span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;