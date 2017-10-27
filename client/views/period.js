const Backbone = require('backbone');

const db = require('../db');
const template = require('../templates/period.hbs');
const NewQuestionView = require('./newQuestion');

module.exports = Backbone.View.extend({
  className: 'period',
  
  initialize: function (options) {
    this.periodId = options.periodId;
    let periods = db.collection('periods');
    periods.doc(this.periodId).onSnapshot(doc => this.onSnapshot(doc));
  },
  
  render: function () {
    if (!this.period) return;
    this.$el.html(template(this.period));
  },
  
  onSnapshot: function (period) {
    this.period = period;
    this.render();
  },
  
  events: {
    'click .new-question': function (event) {
      event.preventDefault();
      let view = new NewQuestionView();
      view.show();
    },
  },
})
