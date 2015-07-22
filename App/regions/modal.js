'use strict';

import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import _ from 'underscore';

let ModalRegion = Marionette.Region.extend({
  el: '.modal',
  constructor: function() {
    _.bindAll(this, 'getEl', 'showModal');
    Backbone.Marionette.Region.prototype.constructor.apply(this, arguments);
    this.on('show', this.showModal, this);
  },
  showModal: function(view) {
    this.$el.removeClass('hide');
    view.on('test', this.test, this);
  },
  test: function(view) {
    view.$el.addClass('slide-out');
    this.empty();
  },
  onBeforeSwap: function(view) {
    view.$el.addClass('slide-in');
  }
});

module.exports = ModalRegion;