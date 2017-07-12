import React, {PropTypes} from 'react';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Hello from 'components/Hello';
import World from 'components/World';


const Routes = () =>
    <Router>
        <div>
            <Route exact path="/" component={Hello}/>
            <Route path="/world" component={World}/>
        </div>
    </Router>;

export default Routes;
