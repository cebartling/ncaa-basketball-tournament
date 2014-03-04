(function () {
    'use strict';

    describe('BasketballTournament.Views.TournamentBracketView', function () {
        var view, model;

        beforeEach(function () {
            model = new BasketballTournament.Models.BracketModel({
                team1:{ region_seeding: 1, team_name: 'Louisville', record: '(29-5)' },
                team2:{ region_seeding: 16, team_name: 'North Carolina A&T', record: '(19-16)' }
            });
            view = new BasketballTournament.Views.TournamentBracketView({model: model});
        });

        describe('Initialization', function () {
            it('sets the Handlebars template.', function () {
                expect(view.template).toBe(JST['app/scripts/templates/tournament-bracket-view.hbs']);
            });

            it('sets the tagName to "div".', function () {
                expect(view.tagName).toBe('div');
            });

            it('sets the className to "tournament-bracket-view col-sm-3".', function () {
                expect(view.className).toBe('tournament-bracket-view col-sm-3');
            });
        });

        describe('Render view', function () {
            it('invokes the toJSON function on the model.', function () {
                var spy = spyOn(model, 'toJSON').andCallThrough();
                view.render();
                expect(spy).toHaveBeenCalled();
            });

            it("invokes the template function pass the model JSON as context.", function () {
                var spy = spyOn(view, 'template').andCallThrough();
                view.render();
                expect(spy).toHaveBeenCalledWith(model.toJSON());
            });

            it("invokes the $el.html function, pass the template invocation output.", function () {
                var spy = spyOn(view.$el, 'html').andCallThrough();
                view.render();
                expect(spy).toHaveBeenCalledWith(view.template(model.toJSON()));
            });

            it("returns a reference to the view itself, for method chaining.", function () {
                expect(view.render()).toBe(view);
            });
        });
    });

})();


