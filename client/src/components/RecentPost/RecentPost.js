import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./RecentPost.module.css";

export const RecentPost = props => {
  return (
    <Link className={styles.recent__post}>
      <img
        src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2-50x50.jpg"
        alt=""
        className={styles.recent__post__img}
      />
      <span className={styles.recent__post__title}>
        Cheerful Loving Couple Bakers Drinking Coffee
      </span>
      <span className={styles.recent__post__date}>01. December 2019</span>
    </Link>
  );
};

RecentPost.propTypes = {};
