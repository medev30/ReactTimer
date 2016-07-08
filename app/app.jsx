var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
// import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
var Main = require('Main');
var Nav = require('Nav');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load Foundation
// require('style!css!foundation-sites/dist/foundation.min.css') // replaced by sassLoader in webpack.config.js
$(document).foundation();

// Load css
require('style!css!sass!appStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Timer} />  // when nothing else matches
            <Route path='countdown' component={Countdown} />
        </Route>
    </Router>,
    document.getElementById('app')
);
