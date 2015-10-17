var React = require('react');
var createHashHistory = require('react-router/node_modules/history/lib/createHashHistory');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/topic');

module.exports = (
  <Router history={createHashHistory({queryKey: true})}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
    </Route>
  </Router>
);
