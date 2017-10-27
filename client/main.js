require("babel-polyfill");
window.$ = require('jquery');
const Backbone = require('backbone');
const Router = require('./router');
require('bootstrap');

window.db = require('./db');

$(function() {
  window.router = new Router();
  Backbone.history.start({pushState: true});
});
