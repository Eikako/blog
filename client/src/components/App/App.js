import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import Header from "../Header";
import Home from "../../routes/Home";
import BurgerMenu from "../BurgerMenu";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const App = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {};

export default App;
