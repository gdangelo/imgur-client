var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function () {
    return {
      topics: []
    }
  },
  componentWillMount: function () {
    Actions.getTopics();
  },
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Imgur-client</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  {this.renderTopics()}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  },
  renderTopics: function () {
    return this.state.topics.map(function(topic){
      return <li key={topic.id}>
        <Link to={"/topics/" + topic.id} activeClassName="active">{topic.name}</Link>
      </li>
    });
  },
  onChange: function (event, topics) {
    this.setState({
      topics: topics
    });
  }
});
