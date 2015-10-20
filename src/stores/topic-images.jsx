var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
    listenables: [Actions],
    getImages: function (id) {
      return Api.get('topics/' + id)
        .then(function(json){
          this.images = _.reject(json.data, function(image){
            return image.is_album; // Exclude topic images which are albums
          });
          this.triggerChange();
        }.bind(this));
    },
    triggerChange: function () {
      this.trigger('change', this.images);
    }
});
