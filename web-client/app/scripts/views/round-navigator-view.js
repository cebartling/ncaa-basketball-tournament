(function () {
    'use strict';

    BasketballTournament.Views.RoundNavigatorView = Backbone.View.extend({
        className: 'round-navigator-view row',
        template: JST['app/scripts/templates/round-navigator-view.hbs'],
        events: {
            'click a': 'onClickRoundLink'
        },

        render: function () {
            this.$el.html(this.template({}));
            return this;
        },

        onClickRoundLink: function(event) {
            this.$el.find('a').parent().removeClass('active');
            $(event.target).parent().addClass('active');
        }
    });
})();