'use strict';

import $ from 'jquery';
import App from './App.js';
import Errors from './views/error.js';

$(function() {
  $('button').on('click', function() {
    App.modal.show(new Errors({data: 'test'}));
  });
});