import React from 'react'
import About from './Componenets/About'
import Home from './Componenets/Home'
import Contect from './Componenets/Contect'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact  path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contect} />

                </Switch>
            </Router>
        </div>
    )
}
