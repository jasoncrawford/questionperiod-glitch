const Backbone = require('backbone');

const template = require('../templates/newQuestion.hbs');

module.exports = Backbone.View.extend({
  className: 'new-question modal fade',
  
  initialize: function (options) {
    this.$el.html(template());
  },
  
  show: function () {
    this.$el.modal('show');
  },
  
  hide: function () {
    this.$el.modal('hide');
  },
  
  events: {
    'click .post-question': function (event) {
      let text = this.$('.question-text').val();
      console.log(`Asked: "${text}"`);
      this.hide();
    },
    
    'hidden.bs.modal': function (event) {
      this.remove();
    },
  },
})
