window.BasketballTournament = {
    DataBuilders: {},
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
    }
};




