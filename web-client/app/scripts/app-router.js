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

        initialize: function() {
        },

        showRound1: function() {
            console.log('Showing round 1 view.');
        },

        showRound2: function() {
            console.log('Showing round 2 view.');
        },

        showRound3: function() {
            console.log('Showing round 3 view.');
        },

        showRound4: function() {
            console.log('Showing round 4 view.');
        },

        showRound5: function() {
            console.log('Showing round 5 view.');
        },

        showRound6: function() {
            console.log('Showing round 6 view.');
        },

        showRound7: function() {
            console.log('Showing round 7 view.');
        }
    });

})();