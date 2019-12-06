import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaTags } from "react-icons/fa";
import styles from "./ArticleCard.module.css";

export const ArticleCard = props => {
  return (
    <div className={styles.article__card}>
      <img
        src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2-455x310.jpg"
        className={styles.article__card__image}
        alt=""
      />
      <span className={styles.article__card__title}>
        Cheerful Loving Couple Bakers Drinking Coffee
      </span>
      <div className={styles.article__card__info}>
        <span className={styles.article__card__categories}>
          In <Link>Life Style</Link>, <Link>Photograph</Link>
        </span>
        <span className={styles.article__card__tags}>
          <FaTags /> Tags <Link>people</Link>
        </span>
        <span className={styles.article__card__date}>1. December 2019</span>
      </div>
      <div className={styles.article__card__excerpt}>
        It’s no secret that the digital industry is booming. From exciting
        startups to global brands, companies are reaching out to digital
        agencies, responding to the new possibilities available. However, the …
      </div>
    </div>
  );
};

ArticleCard.propTypes = {};
