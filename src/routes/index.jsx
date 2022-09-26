import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Client } from "../pages/client";
import { Contact } from "../pages/contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/client" />
        <Route exact path="/client" component={Client} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
