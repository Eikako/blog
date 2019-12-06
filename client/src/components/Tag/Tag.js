import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Tag.module.css";

export const Tag = ({ label }) => (
  <Link to="/" className={styles.tag}>
    {label}
  </Link>
);

Tag.propTypes = {};
