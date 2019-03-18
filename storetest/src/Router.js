import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import ProductPage from "./pages/productpage";
import CartPage from "./pages/cartpage";

const Router = () => (
  <Switch>
    <Route exact path="/dashboard" component={HomePage} />
    <Route exact path="/products" component={ProductPage} />
    <Route exact path="/cart" component={CartPage} />
  </Switch>
);

export default Router;
