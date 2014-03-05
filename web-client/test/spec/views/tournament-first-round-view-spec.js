(function () {
    'use strict';

    describe('BasketballTournament.Views.TournamentFirstRoundView', function () {
        var view, model;

        beforeEach(function () {
            model = new BasketballTournament.Models.TournamentRoundModel(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round1, {round: 1});
            view = new BasketballTournament.Views.TournamentFirstRoundView({model: model});
        });

        describe('Initialization', function () {

            it('sets the Handlebars template.', function () {
                expect(view.template).toBe(JST['app/scripts/templates/tournament-first-round-view.hbs']);
            });

            it('sets the tagName to "div".', function () {
                expect(view.tagName).toBe('div');
            });

            it('sets the className to "tournament-round-view".', function () {
                expect(view.className).toBe('tournament-round-view');
            });

            it('initializes an empty childViews array.', function () {
                expect(view.childViews).toBeDefined();
            });
        });

        describe('.render function', function () {

            it("invokes the template function, passing an empty context.", function () {
                var spy = spyOn(view, 'template').andCallThrough();
                view.render();
                expect(spy).toHaveBeenCalledWith(model.toJSON());
            });

            it("invokes the $el.html function, pass the template invocation output.", function () {
                var spy = spyOn(view.$el, 'html').andCallThrough();
                view.render();
                expect(spy).toHaveBeenCalledWith(view.template(model.toJSON()));
            });

            it('invokes the renderBrackets function.', function () {
                var spy = spyOn(view, 'renderBrackets');
                view.render();
                expect(spy).toHaveBeenCalled();
            });

            it("returns a reference to the view itself, for method chaining.", function () {
                expect(view.render()).toBe(view);
            });
        });

        describe('.renderBrackets function', function () {
            beforeEach(function () {
                view.$el = $('<div><div id="brackets-container"></div></div>');
            });

            it('should remove all previous child views.', function () {
                var spy = spyOn(view, 'removeChildViews');
                view.renderBrackets();
                expect(spy).toHaveBeenCalled();
            });

            it('should render 4 game brackets for the first round.', function () {
                view.renderBrackets();
                expect(view.$el.find('div.tournament-bracket-view').length).toBe(4);
            });

            it('should have 4 child views in the childViews array.', function () {
                view.renderBrackets();
                expect(view.childViews.length).toBe(4);
            });
        });

        describe('.removeChildViews function', function () {
            var childView;

            beforeEach(function () {
                childView = {
                    remove: function () {
                    }
                };
                view.childViews = [childView];
            });

            it('should call remove on the child view.', function () {
                var spy = spyOn(childView, 'remove');
                view.removeChildViews();
                expect(spy).toHaveBeenCalled();
            });

            it('should reinitialize the childViews array to an empty array.', function () {
                expect(view.childViews.length).toBe(1);
                view.removeChildViews();
                expect(view.childViews.length).toBe(0);
            });
        });
    });

})();
