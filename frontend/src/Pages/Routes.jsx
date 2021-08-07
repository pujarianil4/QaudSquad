import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "./Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Stream from "./Stream/Stream";
import Signin from "./Signin/Signin";
import { VideoStream } from "./video/VideoStream";

export const Routes = () => {
  return (
    <div className="route">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
       
        {/* <Route exact path="/chat">
                  <Stream/>
                  
                </Route> */}
        <Route>
          <VideoStream exact path="/videostream" />
        </Route>
        <Route>
          <h3>error</h3>
        </Route>
      </Switch>
    </div>
  );
};
