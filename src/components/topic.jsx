var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/topic-images');
var Actions = require('../actions');

module.exports = React.createClass({
    mixins: [
      Reflux.listenTo(ImageStore, 'onChange')
    ],
    getInitialState: function() {
      return {
        images: []
      };
    },
    componentWillMount: function () {
      Actions.getImages(this.props.params.id);
    },
    componentWillReceiveProps: function (nextProps) {
      Actions.getImages(nextProps.params.id);
    },
    render: function () {
      return <ul>
        {this.renderImages()}
      </ul>
    },
    renderImages: function () {
      if (this.state.images.length <= 0){
        return "No images found."
      } else {
        return this.state.images.map(function(image){
          return <li key={image.id}>{image.title}</li>
        });
      }
    },
    onChange: function (event, images) {
      this.setState({images: images});
    }
});
