import React from 'react'
import {Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import {NavBar } from './NavBar'
import { Signin } from './Signin'
import { Signup } from './Signup'

export const Routes = () => {
    return (
        <div className="route">
            <NavBar />
            <Switch>
                <Route exact path="/">    
                    <Home/>
                </Route>
                <Route path="/signin">
                    <Signin/>
                </Route>
		        <Route path="/signup">
                   <Signup/>
                </Route>
                <Route>
                    <h3>
                        error
                    </h3>
                </Route>
            </Switch>
        </div>
    )
}