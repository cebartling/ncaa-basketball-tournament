(function () {
    'use strict';

    describe('BasketballTournament.Views.RoundNavigatorView', function () {
        var view;

        beforeEach(function () {
            view = new BasketballTournament.Views.RoundNavigatorView({});
        });

        describe('Initialization', function () {
            it('sets the Handlebars template.', function () {
                expect(view.template).toBe(JST['app/scripts/templates/round-navigator-view.hbs']);
            });

            it('sets the tagName to "div".', function () {
                expect(view.tagName).toBe('div');
            });

            it('sets the className to "round-navigator-view row".', function () {
                expect(view.className).toBe('round-navigator-view row');
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


