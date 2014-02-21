(function () {
    'use strict';

    BasketballTournament.Views.TournamentRoundView = Backbone.View.extend({
        className: 'tournament-round-view',
        template: JST['app/scripts/templates/tournament-round-view.hbs'],

        render: function () {
            this.$el.html(this.template({}));
            return this;
        }
    });
})();