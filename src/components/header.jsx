var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Imgur-client</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/1">Topic #1</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});
