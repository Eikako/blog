import React from "react";
import PropTypes from "prop-types";
import styles from "./Burger.module.css";

export const Burger = ({ menuOpen, setMenuOpen }) => (
  <button
    className={styles.burger}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Burger menu button"
  >
    <div className={`${menuOpen && styles.first__line}`} />
    <div className={`${menuOpen && styles.second__line}`} />
    <div className={`${menuOpen && styles.third__line}`} />
  </button>
);

Burger.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired
};
