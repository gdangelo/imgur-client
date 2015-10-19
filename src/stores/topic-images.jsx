var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    getImages: function (id) {
      return Api.get('topics/' + id)
        .then(function(json){
          this.images = json.data;
          this.triggerChange();
        }.bind(this));
    },
    triggerChange: function () {
      this.trigger('change', this.images);
    }
});
