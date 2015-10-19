var React = require('react');

module.exports = React.createClass({
    render: function () {
      return <div>
        {this.images()}
      </div>
    },
    images: function () {
      var link = "https://i.imgur.com/" + this.props.id + "h.jpg";

      return <img src={link} />;
    }
});
