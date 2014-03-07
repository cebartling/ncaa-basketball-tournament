(function () {
    'use strict';

    describe('BasketballTournament.Views.TournamentRegionalRoundView', function () {
        var view, model;

        beforeEach(function () {
            model = new BasketballTournament.Models.TournamentRoundModel(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round2, {round: 2});
            view = new BasketballTournament.Views.TournamentRegionalRoundView({model: model});
        });

        describe('Initialization', function () {
            it('sets the Handlebars template.', function () {
                expect(view.template).toBe(JST['app/scripts/templates/tournament-regional-round-view.hbs']);
            });

            it('sets the tagName to "div".', function () {
                expect(view.tagName).toBe('div');
            });

            it('sets the className to "tournament-round-view".', function () {
                expect(view.className).toBe('tournament-round-view');
            });

            it('initializes an empty childViews array.', function () {
                expect(view.childViews instanceof Array).toBeTruthy();
            });
        });

        describe('.render function', function () {
            describe('second round', function () {
                var context = {round_header: 'Second round'};

                it("invokes the template function, passing an empty context.", function () {
                    var spy = spyOn(view, 'template').andCallThrough();
                    view.render();
                    expect(spy).toHaveBeenCalledWith(context);
                });

                it("invokes the $el.html function, pass the template invocation output.", function () {
                    var spy = spyOn(view.$el, 'html').andCallThrough();
                    view.render();
                    expect(spy).toHaveBeenCalledWith(view.template(context));
                });
            });

            describe('third round', function () {
                var context = {round_header: 'Third round'};

                beforeEach(function () {
                    model = new BasketballTournament.Models.TournamentRoundModel
                        (BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round3, {round: 3});
                    view = new BasketballTournament.Views.TournamentRegionalRoundView({model: model});
                });

                it("invokes the template function, passing an empty context.", function () {
                    var spy = spyOn(view, 'template').andCallThrough();
                    view.render();
                    expect(spy).toHaveBeenCalledWith(context);
                });

                it("invokes the $el.html function, pass the template invocation output.", function () {
                    var spy = spyOn(view.$el, 'html').andCallThrough();
                    view.render();
                    expect(spy).toHaveBeenCalledWith(view.template(context));
                });
            });

            describe('fourth round', function () {
                var context = {round_header: 'Regional Semifinals'};

                beforeEach(function () {
                    model = new BasketballTournament.Models.TournamentRoundModel
                        (BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round4, {round: 4});
                    view = new BasketballTournament.Views.TournamentRegionalRoundView({model: model});
                });

                it("invokes the template function, passing an empty context.", function () {
                    var spy = spyOn(view, 'template').andCallThrough();
                    view.render();
                    expect(spy).toHaveBeenCalledWith(context);
                });

                it("invokes the $el.html function, pass the template invocation output.", function () {
                    var spy = spyOn(view.$el, 'html').andCallThrough();
                    view.render();
                    expect(spy).toHaveBeenCalledWith(view.template(context));
                });
            });

            describe('fifth round', function () {
                var context = {round_header: 'Regional Finals'};

                beforeEach(function () {
                    model = new BasketballTournament.Models.TournamentRoundModel
                        (BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round5, {round: 5});
                    view = new BasketballTournament.Views.TournamentRegionalRoundView({model: model});
                });

                it("invokes the template function, passing an empty context.", function () {
                    var spy = spyOn(view, 'template').andCallThrough();
                    view.render();
                    expect(spy).toHaveBeenCalledWith(context);
                });

                it("invokes the $el.html function, pass the template invocation output.", function () {
                    var spy = spyOn(view.$el, 'html').andCallThrough();
                    view.render();
                    expect(spy).toHaveBeenCalledWith(view.template(context));
                });
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

            it('should render 32 game brackets for the first round.', function () {
                view.renderBrackets();
                expect(view.$el.find('div.tournament-bracket-view').length).toBe(32);
            });

            it('should have 32 child views in the childViews array.', function () {
                view.renderBrackets();
                expect(view.childViews.length).toBe(32);
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


