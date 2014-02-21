(function () {
    'use strict';

    describe('BasketballTournament.Views.TournamentRoundView', function () {
        var view;

        beforeEach(function () {
            view = new BasketballTournament.Views.TournamentRoundView({});
        });

        describe('Initialization', function () {
            it('sets the Handlebars template.', function () {
                expect(view.template).toBe(JST['app/scripts/templates/tournament-round-view.hbs']);
            });

            it('sets the tagName to "div".', function () {
                expect(view.tagName).toBe('div');
            });

            it('sets the className to "tournament-round-view".', function () {
                expect(view.className).toBe('tournament-round-view');
            });
        });

        describe('Render view', function () {
            it("invokes the template function, passing an empty context.", function () {
                var spy = spyOn(view, 'template').andCallThrough();
                view.render();
                expect(spy).toHaveBeenCalledWith({});
            });

            it("invokes the $el.html function, pass the template invocation output.", function () {
                var spy = spyOn(view.$el, 'html').andCallThrough();
                view.render();
                expect(spy).toHaveBeenCalledWith(view.template({}));
            });

            it("returns a reference to the view itself, for method chaining.", function () {
                expect(view.render()).toBe(view);
            });
        });
    });

})();


