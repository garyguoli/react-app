import React from "react";
// import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "../pages/Home";
import NoMatch from "../pages/error/404";
// import NoMatch from "../pages/404";

const AppRouter = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/error/404' component={NoMatch} />
    {/* <Route path="/:name" component={Package} /> */}
  </Switch>
);

export default AppRouter;
