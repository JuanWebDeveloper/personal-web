import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/normalize.css";
import "./styles/Global.css";

import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Contact" component={Contact} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
