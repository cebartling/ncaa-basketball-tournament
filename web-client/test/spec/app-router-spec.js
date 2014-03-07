(function () {
    'use strict';

    describe('BasketballTournament.AppRouter', function () {
        var appRouter;

        beforeEach(function () {
            appRouter = new BasketballTournament.AppRouter();
        });

        describe('Initialization', function () {

            it('wires the round1 route to showRound1 route handler', function () {
                expect(appRouter.routes['round1']).toBe('showRound1');
            });

            it('wires the round2 route to showRound2 route handler', function () {
                expect(appRouter.routes['round2']).toBe('showRound2');
            });

            it('wires the round3 route to showRound3 route handler', function () {
                expect(appRouter.routes['round3']).toBe('showRound3');
            });

            it('wires the round4 route to showRound4 route handler', function () {
                expect(appRouter.routes['round4']).toBe('showRound4');
            });

            it('wires the round5 route to showRound5 route handler', function () {
                expect(appRouter.routes['round5']).toBe('showRound5');
            });

            it('wires the round6 route to showRound6 route handler', function () {
                expect(appRouter.routes['round6']).toBe('showRound6');
            });

            it('wires the round7 route to showRound7 route handler', function () {
                expect(appRouter.routes['round7']).toBe('showRound7');
            });
        });

        describe('.showRound1 function', function () {
            var modelSpy, viewSpy;
            var stubModel = {

            };
            var stubView = {
                render: function () {
                    return this;
                },

                el: '<div id="round-one-jasmine-test-div"></div>'
            };

            beforeEach(function () {
                modelSpy = spyOn(BasketballTournament.Models, 'TournamentRoundModel').andReturn(stubModel);
                viewSpy = spyOn(BasketballTournament.Views, 'TournamentFirstRoundView').andReturn(stubView);
                // Use jasmine-fixture to add DOM fixture for testing
                affix('div.main-content');
            });

            it('creates a new model.', function () {
                appRouter.showRound1();
                expect(modelSpy).toHaveBeenCalledWith(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round1, {round: 1});
            });

            it('creates a new view.', function () {
                appRouter.showRound1();
                expect(viewSpy).toHaveBeenCalledWith({model: stubModel});
            });

            it('sets the inner HTML of main-content div.', function () {
                appRouter.showRound1();
                expect($('div.main-content div#round-one-jasmine-test-div').length).toBe(1);
            });
        });

        describe('.showRound2 function', function () {
            var modelSpy, viewSpy;
            var stubModel = {

            };
            var stubView = {
                render: function () {
                    return this;
                },

                el: '<div id="round-two-jasmine-test-div"></div>'
            };

            beforeEach(function () {
                modelSpy = spyOn(BasketballTournament.Models, 'TournamentRoundModel').andReturn(stubModel);
                viewSpy = spyOn(BasketballTournament.Views, 'TournamentRegionalRoundView').andReturn(stubView);
                // Use jasmine-fixture to add DOM fixture for testing
                affix('div.main-content');
            });

            it('creates a new model.', function () {
                appRouter.showRound2();
                expect(modelSpy).toHaveBeenCalledWith(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round2, {round: 2});
            });

            it('creates a new view.', function () {
                appRouter.showRound2();
                expect(viewSpy).toHaveBeenCalledWith({model: stubModel});
            });

            it('sets the inner HTML of main-content div.', function () {
                appRouter.showRound2();
                expect($('div.main-content div#round-two-jasmine-test-div').length).toBe(1);
            });
        });

        describe('.showRound3 function', function () {
            var modelSpy, viewSpy;
            var stubModel = { };
            var stubView = {
                render: function () {
                    return this;
                },

                el: '<div id="round-three-jasmine-test-div"></div>'
            };

            beforeEach(function () {
                modelSpy = spyOn(BasketballTournament.Models, 'TournamentRoundModel').andReturn(stubModel);
                viewSpy = spyOn(BasketballTournament.Views, 'TournamentRegionalRoundView').andReturn(stubView);
                // Use jasmine-fixture to add DOM fixture for testing
                affix('div.main-content');
            });

            it('creates a new model.', function () {
                appRouter.showRound3();
                expect(modelSpy).toHaveBeenCalledWith(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round3, {round: 3});
            });

            it('creates a new view.', function () {
                appRouter.showRound3();
                expect(viewSpy).toHaveBeenCalledWith({model: stubModel});
            });

            it('sets the inner HTML of main-content div.', function () {
                appRouter.showRound3();
                expect($('div.main-content div#round-three-jasmine-test-div').length).toBe(1);
            });
        });

        describe('.showRound4 function', function () {
            var modelSpy, viewSpy;
            var stubModel = { };
            var stubView = {
                render: function () {
                    return this;
                },

                el: '<div id="round-four-jasmine-test-div"></div>'
            };

            beforeEach(function () {
                modelSpy = spyOn(BasketballTournament.Models, 'TournamentRoundModel').andReturn(stubModel);
                viewSpy = spyOn(BasketballTournament.Views, 'TournamentRegionalRoundView').andReturn(stubView);
                // Use jasmine-fixture to add DOM fixture for testing
                affix('div.main-content');
            });

            it('creates a new model.', function () {
                appRouter.showRound4();
                expect(modelSpy).toHaveBeenCalledWith(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round4, {round: 4});
            });

            it('creates a new view.', function () {
                appRouter.showRound4();
                expect(viewSpy).toHaveBeenCalledWith({model: stubModel});
            });

            it('sets the inner HTML of main-content div.', function () {
                appRouter.showRound4();
                expect($('div.main-content div#round-four-jasmine-test-div').length).toBe(1);
            });
        });

        describe('.showRound5 function', function () {
            var modelSpy, viewSpy;
            var stubModel = { };
            var stubView = {
                render: function () {
                    return this;
                },

                el: '<div id="round-five-jasmine-test-div"></div>'
            };

            beforeEach(function () {
                modelSpy = spyOn(BasketballTournament.Models, 'TournamentRoundModel').andReturn(stubModel);
                viewSpy = spyOn(BasketballTournament.Views, 'TournamentRegionalRoundView').andReturn(stubView);
                // Use jasmine-fixture to add DOM fixture for testing
                affix('div.main-content');
            });

            it('creates a new model.', function () {
                appRouter.showRound5();
                expect(modelSpy).toHaveBeenCalledWith(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round5, {round: 5});
            });

            it('creates a new view.', function () {
                appRouter.showRound5();
                expect(viewSpy).toHaveBeenCalledWith({model: stubModel});
            });

            it('sets the inner HTML of main-content div.', function () {
                appRouter.showRound5();
                expect($('div.main-content div#round-five-jasmine-test-div').length).toBe(1);
            });
        });

        describe('.showRound6 function', function () {
            var modelSpy, viewSpy;
            var stubModel = { };
            var stubView = {
                render: function () {
                    return this;
                },

                el: '<div id="round-six-jasmine-test-div"></div>'
            };

            beforeEach(function () {
                modelSpy = spyOn(BasketballTournament.Models, 'TournamentRoundModel').andReturn(stubModel);
                viewSpy = spyOn(BasketballTournament.Views, 'TournamentNationalSemifinalsRoundView').andReturn(stubView);
                // Use jasmine-fixture to add DOM fixture for testing
                affix('div.main-content');
            });

            it('creates a new model.', function () {
                appRouter.showRound6();
                expect(modelSpy).toHaveBeenCalledWith(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round6, {round: 6});
            });

            it('creates a new view.', function () {
                appRouter.showRound6();
                expect(viewSpy).toHaveBeenCalledWith({model: stubModel});
            });

            it('sets the inner HTML of main-content div.', function () {
                appRouter.showRound6();
                expect($('div.main-content div#round-six-jasmine-test-div').length).toBe(1);
            });
        });
        
        describe('.showRound7 function', function () {
            var modelSpy, viewSpy;
            var stubModel = { };
            var stubView = {
                render: function () {
                    return this;
                },

                el: '<div id="round-seven-jasmine-test-div"></div>'
            };

            beforeEach(function () {
                modelSpy = spyOn(BasketballTournament.Models, 'TournamentRoundModel').andReturn(stubModel);
                viewSpy = spyOn(BasketballTournament.Views, 'TournamentNationalFinalsRoundView').andReturn(stubView);
                // Use jasmine-fixture to add DOM fixture for testing
                affix('div.main-content');
            });

            it('creates a new model.', function () {
                appRouter.showRound7();
                expect(modelSpy).toHaveBeenCalledWith(BasketballTournament.DataBuilders.TournamentRoundDataBuilder.round7, {round: 7});
            });

            it('creates a new view.', function () {
                appRouter.showRound7();
                expect(viewSpy).toHaveBeenCalledWith({model: stubModel});
            });

            it('sets the inner HTML of main-content div.', function () {
                appRouter.showRound7();
                expect($('div.main-content div#round-seven-jasmine-test-div').length).toBe(1);
            });
        });
    });
})();
