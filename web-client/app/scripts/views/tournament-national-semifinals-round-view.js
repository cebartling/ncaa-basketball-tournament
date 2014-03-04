(function () {
    'use strict';

    BasketballTournament.Views.TournamentNationalSemifinalsRoundView = Backbone.View.extend({
        className: 'tournament-round-view',
        template: JST['app/scripts/templates/tournament-national-semifinals-round-view.hbs'],

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.renderBrackets();
            return this;
        },

        renderBrackets: function () {
            var game1Model = new BasketballTournament.Models.BracketModel(this.model.get('game1'));
            var game1View = new BasketballTournament.Views.TournamentBracketView({
                model: game1Model, className: 'tournament-bracket-view col-sm-offset-1 col-sm-4'
            });
            var game2Model = new BasketballTournament.Models.BracketModel(this.model.get('game2'));
            var game2View = new BasketballTournament.Views.TournamentBracketView({
                model: game2Model, className: 'tournament-bracket-view col-sm-offset-2 col-sm-4'
            });
            var row = $('<div class="row"></div>');
            row.append(game1View.render().el);
            row.append(game2View.render().el);
            this.$el.find('div#brackets-container').append(row);
        }

    });
})();