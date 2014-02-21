(function () {
    'use strict';

    BasketballTournament.Views.RoundNavigatorView = Backbone.View.extend({
        className: 'round-navigator-view row',
        template: JST['app/scripts/templates/round-navigator-view.hbs'],

        render: function () {
            this.$el.html(this.template({}));
            return this;
        }
    });
})();