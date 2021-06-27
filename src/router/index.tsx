import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Base from "@/components/Base/Base";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Base} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
