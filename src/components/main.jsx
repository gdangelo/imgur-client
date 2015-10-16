var React = require('react');
var ReactRouter = require('react-router');

var Header = require('./header');
var TopicList = require('./topic-list');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        {this.content()}
      </div>
    );
  },

  content: function () {
    if (this.props.children) {
      return this.props.children;
    } else {
      return <TopicList />;
    }
  }
});
