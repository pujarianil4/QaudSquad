import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import Stream from "./Stream/Stream";
import { VideoStream } from "./video/VideoStream";

export const Routes = () => {
  return (
    <div className="route">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/chat">
          <Stream />
        </Route>
        <Route exact path="/videoStream">
          <VideoStream />
        </Route>
        <Route>
          <h3>error</h3>
        </Route>
      </Switch>
    </div>
  );
};
