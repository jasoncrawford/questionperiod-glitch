const Backbone = require('backbone');

const HomeView = require('./views/home');
const PeriodView = require('./views/period');

module.exports = Backbone.Router.extend({
  routes: {
    '(/)': 'home',
    'periods/:id(/)': 'period',
  },
  
  showView: function (view) {
    if (this.view) this.view.remove();
    $('#root').append(view.$el);
    this.view = view;
  },
  
  home: function () {
    this.showView(new HomeView());
  },
  
  period: function (periodId) {
    this.showView(new PeriodView({periodId}));
  },
})
