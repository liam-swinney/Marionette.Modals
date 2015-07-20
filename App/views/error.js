'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var errorsTemplate = require('../Templates/error.hbs');

var errorModal = Backbone.Marionette.ItemView.extend({
  className: 'backdrop',
  triggers: {
    'click .close': 'close',
    'click': 'close'
  },
  events: {
    'click .results': function(e) {
      e.stopPropagation();
    },
    'click button': 'advanceStep'
  },
  template: function(data) {
    console.log(data.error);
    return errorsTemplate({error: data.error});
  },
  templateHelpers: function() {
    return {
      error: this.options.data
    };
  },
  onRender: function() {
    console.log(this.options.data);
  },
  advanceStep: function() {
    var transitions = 'transitionend webkitTransitionEnd';

    this.$el.addClass('slide-out').off(transitions).on(transitions, function() {
      $(this).off(transitions);
      // App.modal.show(new ShowErrors({data: self.options.data}));
      console.log('ho');
    });
  }
});

module.exports = errorModal;