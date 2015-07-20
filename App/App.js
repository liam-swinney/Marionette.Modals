var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

var Marionette = require('backbone.marionette');
var ModalRegion = require('./Regions/Modal.js');
var MyApp = new Marionette.Application();

MyApp.addRegions({
  modal: ModalRegion
});

module.exports = MyApp;