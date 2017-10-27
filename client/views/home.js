const Backbone = require('backbone');

const db = require('../db');
// const router = require('../router');
const template = require('../templates/home.hbs');

module.exports = Backbone.View.extend({
  className: "home",
  
  initialize: function () {
    this.$el.html(template());
  },
  
  events: {
    'click .create-session': async function (event) {
      event.preventDefault();
      console.log('create session!');
      let periods = db.collection('periods');
      let period = await periods.add({});
      console.log(`created period ${period.id}`);
      window.router.navigate(`periods/${period.id}`, {trigger: true});
    },
  },
})
