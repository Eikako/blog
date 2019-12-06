import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerMenu.module.css";

export const BurgerMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div
        className={`${styles.burger__menu} ${menuOpen &&
          styles.burger__menu_open}`}
        aria-label="Burger menu"
      >
        <span>Burger Menu</span>
      </div>
      <div
        className={`${styles.burger__overlay} ${menuOpen &&
          styles.burger__overlay_open}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Burger menu outside overlay"
      />
    </>
  );
};

BurgerMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired
};
