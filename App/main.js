'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var _ = require('underscore');
var App = require('./App.js');
var Errors = require('./views/error.js');

$(function() {
  $('button').on('click', function() {
    App.modal.show(new Errors({data: 'test'}));
  });
});