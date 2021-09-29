import React from 'react'
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Home from '../Pages/Home';
function MainRoutes() {
    return (
        <div>
            <Router>
                <Route path="/home">
                  <Home/>
                </Route>
            </Router>
        </div>
    )
}

export default MainRoutes
