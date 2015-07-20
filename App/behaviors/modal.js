'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var ModalBehavior = Marionette.Behavior.extend({
  events: {
    'click @ui.test': 'test',
    'click @ui.close': 'close',
    'click': 'close',
    'click .results': function(e) {
      e.stopPropagation();
    }
  },

  test: function() {
    alert('hi!' + this.options.message)
  },
  close: function() {
    var transitions = 'transitionend webkitTransitionEnd';
    var self = this;

    this.$el.addClass('hide').off(transitions).on(transitions, function() {
      $(this).off(transitions);
      self.empty(); // Clear the view
    });
  }
});
module.exports = ModalBehavior;