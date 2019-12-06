import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import ArticleCard from "../../components/ArticleCard";
import SidebarBox from "../../components/SidebarBox/SidebarBox";
import RecentPost from "../../components/RecentPost";
import Tag from "../../components/Tag";

export const Home = props => {
  return (
    <div className={styles.home}>
      <div className={styles.home__article__grid}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <div className={styles.home__sidebar}>
        <SidebarBox title="Categories">
          <div className={styles.home__sidebar__categories}>
            <Link className={styles.category}>Life Style</Link>
            <Link className={styles.category}>Photograph</Link>
            <Link className={styles.category}>Nature</Link>
            <Link className={styles.category}>Food</Link>
          </div>
        </SidebarBox>
        <SidebarBox title="Recent Posts">
          <div className={styles.home__sidebar__posts}>
            <RecentPost />
            <RecentPost />
            <RecentPost />
          </div>
        </SidebarBox>
        <SidebarBox title="Tags">
          <div className={styles.home__sidebar__tags}>
            <Tag label="city" />
            <Tag label="design" />
            <Tag label="girl" />
            <Tag label="people" />
            <Tag label="work" />
          </div>
        </SidebarBox>
      </div>
    </div>
  );
};

Home.propTypes = {};
