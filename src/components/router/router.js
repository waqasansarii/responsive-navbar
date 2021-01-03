import React from 'react'
// import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from '../navbar/navbar'


const Routerr = () => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path='/'  />
            </Switch>
        </Router>
    )
}
export default Routerr

