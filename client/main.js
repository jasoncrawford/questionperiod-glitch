require("babel-polyfill");
window.$ = require('jquery');
const Backbone = require('backbone');
const Router = require('./router');

window.db = require('./db');

$(function() {
  window.router = new Router();
  Backbone.history.start({pushState: true});
});
