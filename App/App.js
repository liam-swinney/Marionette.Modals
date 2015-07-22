import Marionette from 'backbone.marionette';
import ModalRegion from './Regions/Modal.js';

let MyApp = new Marionette.Application();

MyApp.addRegions({
  modal: ModalRegion
});

module.exports = MyApp;