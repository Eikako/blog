import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./HeaderLink.module.css";

export const HeaderLink = ({ path, label }) => {
  const [matching, setMatching] = useState(false);

  return (
    <NavLink
      to={path}
      className={styles.header__link}
      isActive={match => {
        if (match) {
          setMatching(true);
          return true;
        }
        setMatching(false);
        return false;
      }}
    >
      {label}
      <div
        className={`${styles.header__link__line} ${matching &&
          styles.header__link_active}`}
      />
    </NavLink>
  );
};

HeaderLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
