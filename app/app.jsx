var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
// import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
var Main = require('Main');
var Nav = require('Nav');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Load css
require('style!css!sass!appStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>

        </Route>
    </Router>,
    document.getElementById('app')
);
