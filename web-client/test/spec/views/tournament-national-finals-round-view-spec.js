(function () {
    'use strict';

    describe('BasketballTournament.Views.TournamentNationalFinalsRoundView', function () {
        var view, model;

        beforeEach(function () {
            model = new BasketballTournament.Models.TournamentRoundModel(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round7, {round: 7});
            view = new BasketballTournament.Views.TournamentNationalFinalsRoundView({model: model});
        });

        describe('Initialization', function () {
            it('sets the Handlebars template.', function () {
                expect(view.template).toBe(JST['app/scripts/templates/tournament-national-finals-round-view.hbs']);
            });

            it('sets the tagName to "div".', function () {
                expect(view.tagName).toBe('div');
            });

            it('sets the className to "tournament-round-view".', function () {
                expect(view.className).toBe('tournament-round-view');
            });

            it('initializes the childViews property to an empty array.', function () {
                expect(view.childViews instanceof Array).toBeTruthy();
                expect(view.childViews.length).toBe(0);
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

            it('should render 1 game brackets for the national finals round.', function () {
                view.renderBrackets();
                expect(view.$el.find('div.tournament-bracket-view').length).toBe(1);
            });

            it('should have 1 child views in the childViews array.', function () {
                view.renderBrackets();
                expect(view.childViews.length).toBe(1);
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

