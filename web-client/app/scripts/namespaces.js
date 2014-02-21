window.BasketballTournament = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},

    init: function () {
        'use strict';

        var appRouter = new BasketballTournament.AppRouter();
        Backbone.history.start();
        var roundNavigatorView = new BasketballTournament.Views.RoundNavigatorView();
        $('div.navigator').html(roundNavigatorView.render().el);
//        var json = {
//            team1: {region_seeding: 1, team_name: "Duke", record: "(23-3)"},
//            team2: {region_seeding: 16, team_name: "Texas A&T", record: "(12-15)"}
//        };
//        var model = new BasketballTournament.Models.BracketModel(json);
//        var view = new BasketballTournament.Views.TournamentBracketView({model: model});
//        $('div.main-content').html(view.render().el);
    }
};




