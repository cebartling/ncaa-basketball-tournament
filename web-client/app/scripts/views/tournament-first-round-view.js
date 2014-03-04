(function () {
    'use strict';

    BasketballTournament.Views.TournamentFirstRoundView = Backbone.View.extend({
        className: 'tournament-round-view',
        template: JST['app/scripts/templates/tournament-first-round-view.hbs'],

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.renderBrackets();
            return this;
        },

        renderBrackets: function () {
            var game1Model = new BasketballTournament.Models.BracketModel(this.model.get('game1'));
            var game1View = new BasketballTournament.Views.TournamentBracketView({ model: game1Model });
            var game2Model = new BasketballTournament.Models.BracketModel(this.model.get('game2'));
            var game2View = new BasketballTournament.Views.TournamentBracketView({ model: game2Model });
            var game3Model = new BasketballTournament.Models.BracketModel(this.model.get('game3'));
            var game3View = new BasketballTournament.Views.TournamentBracketView({ model: game3Model });
            var game4Model = new BasketballTournament.Models.BracketModel(this.model.get('game4'));
            var game4View = new BasketballTournament.Views.TournamentBracketView({ model: game4Model });
            var row = $('<div class="row"></div>');
            row.append(game1View.render().el);
            row.append(game2View.render().el);
            row.append(game3View.render().el);
            row.append(game4View.render().el);
            this.$el.find('div#brackets-container').append(row);
        }

    });
})();