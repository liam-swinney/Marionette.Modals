'use strict';

import $ from 'jquery';
import Marionette from 'backbone.marionette';

let ModalBehavior = Marionette.Behavior.extend({
  events: {
    'click @ui.test': 'test',
    'click @ui.close': 'close',
    'click': 'close',
    'click .results': function(e) {
      e.stopPropagation();
    }
  },

  keyEvents: function(e) {
    if (e.keyCode === 27) {
      alert('pressed esc');
      this.close();
    }
  },
  onShow: function() {
    let _this = this;

    window.addEventListener('keyup', function(e) {
      if (e.keyCode === 27) {
        console.log('vanilla');
        _this.close();
      }
    });
  },
  test: function() {
    console.log(this.view);
    alert('hi!' + this.options.message);
  },
  close: function() {
    let transitions = 'transitionend webkitTransitionEnd';
    let _this = this;

    this.$el.addClass('hide').off(transitions).on(transitions, function() {
      $(this).off(transitions);

      _this.view.destroy(); // Clear the view
    });

  }
});
module.exports = ModalBehavior;