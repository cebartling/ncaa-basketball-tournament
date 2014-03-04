(function () {
    'use strict';

    BasketballTournament.Views.TournamentBracketView = Backbone.View.extend({
        className: 'tournament-bracket-view col-sm-2',
        template: JST['app/scripts/templates/tournament-bracket-view.hbs'],

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
})();



