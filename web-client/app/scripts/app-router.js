(function () {
    'use strict';

    BasketballTournament.AppRouter = Backbone.Router.extend({
        routes: {
            'round1': 'showRound1',
            'round2': 'showRound2',
            'round3': 'showRound3',
            'round4': 'showRound4',
            'round5': 'showRound5',
            'round6': 'showRound6',
            'round7': 'showRound7'
        },

        showRound1: function() {
            var model = new BasketballTournament.Models.TournamentRoundModel(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round1, {round: 1});
            var view = new BasketballTournament.Views.TournamentFirstRoundView({model: model});
            $('div.main-content').html(view.render().el);
        },

        showRound2: function() {
            var model = new BasketballTournament.Models.TournamentRoundModel(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round2, {round: 2});
            var view = new BasketballTournament.Views.TournamentRegionalRoundView({model: model});
            $('div.main-content').html(view.render().el);
        },

        showRound3: function() {
            var model = new BasketballTournament.Models.TournamentRoundModel(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round3, {round: 3});
            var view = new BasketballTournament.Views.TournamentRegionalRoundView({model: model});
            $('div.main-content').html(view.render().el);
        },

        showRound4: function() {
            var model = new BasketballTournament.Models.TournamentRoundModel(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round4, {round: 4});
            var view = new BasketballTournament.Views.TournamentRegionalRoundView({model: model});
            $('div.main-content').html(view.render().el);
        },

        showRound5: function() {
            var model = new BasketballTournament.Models.TournamentRoundModel(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round5, {round: 5});
            var view = new BasketballTournament.Views.TournamentRegionalRoundView({model: model});
            $('div.main-content').html(view.render().el);
        },

        showRound6: function() {
            var model = new BasketballTournament.Models.TournamentRoundModel(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round6, {round: 6});
            var view = new BasketballTournament.Views.TournamentNationalSemifinalsRoundView({model: model});
            $('div.main-content').html(view.render().el);
        },

        showRound7: function() {
            var model = new BasketballTournament.Models.TournamentRoundModel(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round7, {round: 7});
            var view = new BasketballTournament.Views.TournamentNationalFinalsRoundView({model: model});
            $('div.main-content').html(view.render().el);
        }
    });

})();