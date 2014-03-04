(function () {
    'use strict';

    BasketballTournament.Views.TournamentFirstRoundView = Backbone.View.extend({
        className: 'tournament-round-view',
        template: JST['app/scripts/templates/tournament-first-round-view.hbs'],

        initialize: function(options) {
            this.childViews = [];
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.renderBrackets();
            return this;
        },

        renderBrackets: function () {
            this.removeChildViews();
            var row = $('<div class="row"></div>');
            var games = ['game1', 'game2', 'game3', 'game4'];
            var addOffset = false;
            _.each(games, $.proxy(function(game){
                var model = new BasketballTournament.Models.BracketModel(this.model.get(game));
                var className = (addOffset) ? 'tournament-bracket-view col-sm-offset-1 col-sm-2'
                    : 'tournament-bracket-view col-sm-2';
                var view = new BasketballTournament.Views.TournamentBracketView({ model: model, className: className });
                this.childViews.push(view);
                row.append(view.render().el);
                addOffset = true;
            }, this));
            this.$el.find('div#brackets-container').append(row);
        },

        removeChildViews: function() {
            _.each(this.childViews, function(childView){
                childView.remove();
            });
            this.childViews = [];
        }
    });
})();