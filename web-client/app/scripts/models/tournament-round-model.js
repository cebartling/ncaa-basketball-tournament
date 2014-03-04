(function () {
    'use strict';

    BasketballTournament.Models.TournamentRoundModel = Backbone.Model.extend({

        url: function() {
            return '/round/' + this.round;
        },

        initialize: function (attributes, options) {
            this.round = options.round;
        }
    });

})();
