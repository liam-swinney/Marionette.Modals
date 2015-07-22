'use strict';

import $ from 'jquery';
import Marionette from 'backbone.marionette';
import errorsTemplate from '../Templates/error.hbs';
import behavior from '../behaviors/modal.js';

let errorModal = Marionette.ItemView.extend({
  className: 'backdrop',
  ui: {
    'test': '.test',
    'close': '.close'
  },
  behaviors: {
    test: {
      behaviorClass: behavior,
      message: 'hi thereee'
    }
  },
  template: function(data) {
    return errorsTemplate({error: data.error});
  },
  templateHelpers: function() {
    return {
      error: this.options.data
    };
  },
  onRender: function() {
  },
  advanceStep: function() {
    let transitions = 'transitionend webkitTransitionEnd';

    this.$el.addClass('slide-out').off(transitions).on(transitions, function() {
      $(this).off(transitions);
      // App.modal.show(new ShowErrors({data: self.options.data}));
      console.log('ho');
    });
  }
});

module.exports = errorModal;