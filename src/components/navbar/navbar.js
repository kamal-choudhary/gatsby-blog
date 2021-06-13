import React from "react";
import { Link } from "gatsby";
import { navigation, navLink } from "./navbar.module.css";

const navbar = () => {
  return (
    <nav className={navigation}>
      <Link to="/" className={navLink}>
        Home
      </Link>
      <Link to="/blog" className={navLink}>
        Blog
      </Link>
      <Link to="/about" className={navLink}>
        About
      </Link>
    </nav>
  );
};

export default navbar;
