import React from "react";
import PropTypes from "prop-types";
import styles from "./SidebarBox.module.css";

const SidebarBox = ({ children, title }) => {
  return (
    <div className={styles.sidebar__box}>
      <div className={styles.box__header}>
        <span className={styles.box__title}>{title}</span>
        <div className={styles.horizontal__line} />
      </div>
      {children}
    </div>
  );
};

SidebarBox.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default SidebarBox;
