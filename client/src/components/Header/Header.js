import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import Burger from "../Burger";
import HeaderLink from "../HeaderLink";

export const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={styles.header} aria-label="Header">
      <div className={styles.header__left}>
        <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className={styles.header__line} />
        <Link to="/" className={styles.header__logo}>
          Toei
        </Link>
      </div>
      <div className={styles.header__right}>
        <HeaderLink path="/about-me" label="About Me" />
        <HeaderLink path="/contact" label="Contact" />
      </div>
    </div>
  );
};

Header.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired
};
