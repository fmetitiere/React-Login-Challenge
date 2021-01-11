import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import WebLayout from "../src/_components/_layout/WebLayout";
import Home from "./_pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <WebLayout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </WebLayout>
    </BrowserRouter>
  );
}

export default Routes;
