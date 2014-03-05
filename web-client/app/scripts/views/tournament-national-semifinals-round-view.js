(function () {
    'use strict';

    BasketballTournament.Views.TournamentNationalSemifinalsRoundView = Backbone.View.extend({
        className: 'tournament-round-view',
        template: JST['app/scripts/templates/tournament-national-semifinals-round-view.hbs'],

        initialize: function() {
            this.childViews = [];
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.renderBrackets();
            return this;
        },

        renderBrackets: function () {
            this.removeChildViews();
            var game1Model = new BasketballTournament.Models.BracketModel(this.model.get('game1'));
            var game1View = new BasketballTournament.Views.TournamentBracketView({
                model: game1Model, className: 'tournament-bracket-view col-sm-offset-1 col-sm-4'
            });
            this.childViews.push(game1View);

            var game2Model = new BasketballTournament.Models.BracketModel(this.model.get('game2'));
            var game2View = new BasketballTournament.Views.TournamentBracketView({
                model: game2Model, className: 'tournament-bracket-view col-sm-offset-2 col-sm-4'
            });
            this.childViews.push(game2View);

            var row = $('<div class="row"></div>');
            row.append(game1View.render().el);
            row.append(game2View.render().el);
            this.$el.find('div#brackets-container').append(row);
        },

        removeChildViews: function () {
            _.each(this.childViews, function (childView) {
                childView.remove();
            });
            this.childViews = [];
        }
    });
})();