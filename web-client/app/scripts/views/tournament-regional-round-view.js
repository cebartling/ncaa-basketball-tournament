(function () {
    'use strict';

    BasketballTournament.Views.TournamentRegionalRoundView = Backbone.View.extend({
        className: 'tournament-round-view',
        template: JST['app/scripts/templates/tournament-regional-round-view.hbs'],

        render: function () {
            var json = {round_header: 'Regional Finals'};
            if (this.model.get('round') == 2) {
                json = {round_header: 'Second round'};
            } else if (this.model.get('round') == 3) {
                json = {round_header: 'Third round'};
            } else if (this.model.get('round') == 4) {
                json = {round_header: 'Regional Semifinals'};
            }
            this.$el.html(this.template(json));
            this.renderBrackets();
            return this;
        },

        renderBrackets: function() {
            var numberOfGames = this.model.get('numberOfGames');
            var regions = this.model.get('regions');
            for (var i = 1; i <= numberOfGames; i++) {
                var gameIndex = 'game' + i;
                var midwestGameModel = new BasketballTournament.Models.BracketModel(regions.midwest[gameIndex]);
                var midwestBracketView = new BasketballTournament.Views.TournamentBracketView({model: midwestGameModel});

                var westGameModel = new BasketballTournament.Models.BracketModel(regions.west[gameIndex]);
                var westBracketView = new BasketballTournament.Views.TournamentBracketView({model: westGameModel,
                    className: 'tournament-bracket-view col-sm-offset-1 col-sm-2'});

                var southGameModel = new BasketballTournament.Models.BracketModel(regions.south[gameIndex]);
                var southBracketView = new BasketballTournament.Views.TournamentBracketView({model: southGameModel,
                    className: 'tournament-bracket-view col-sm-offset-1 col-sm-2'});

                var eastGameModel = new BasketballTournament.Models.BracketModel(regions.east[gameIndex]);
                var eastBracketView = new BasketballTournament.Views.TournamentBracketView({model: eastGameModel,
                    className: 'tournament-bracket-view col-sm-offset-1 col-sm-2'});

                var row = $('<div class="row"></div>');
                row.append(midwestBracketView.render().el);
                row.append(westBracketView.render().el);
                row.append(southBracketView.render().el);
                row.append(eastBracketView.render().el);
                this.$el.find('div#brackets-container').append(row);
            }
        }
    });
})();