var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
      return {
        hovering: false
      };
    },
    render: function () {
      return <div
        className="image-preview"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>

        {this.state.hovering && this.props.animated ? this.videos() : this.images()}
        {!this.state.hovering && this.props.animated ? this.icons() : null}
        {this.state.hovering ?  this.stats() : null}
      </div>
    },
    stats: function () {
      return <div className="stats">
        View: {this.props.views}
        <br />
        Upvotes: {this.props.ups}
      </div>;
    },
    icons: function () {
      return <span className="glyphicon glyphicon-play"></span>;
    },
    images: function () {
      var link = "https://i.imgur.com/" + this.props.id + "h.jpg";

      return <img src={link} />;
    },
    videos: function () {
      return <video autoPlay="autoplay" loop="loop" preload="auto">
        <source src={this.props.mp4} type="video/mp4"></source>
      </video>;
    },
    handleMouseEnter: function () {
      this.setState({hovering: true});
    },
    handleMouseLeave: function () {
      this.setState({hovering: false});
    }
});
