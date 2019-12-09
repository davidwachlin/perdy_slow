import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars"></i>
      </span>
      <h1 className="logo" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle} :
        </Link>
      </h1>
      <ul className="main-nav" id="js-menu">
        <li></li>
        <li>
          <Link to="/shows" className="nav-links">
            shows
          </Link>
        </li>
        <li>
          <Link
          to="/music"className="nav-links">
            music
          </Link>
        </li>
        <li>
        <Link
          to="/about"className="nav-links">
            about
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-links">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
