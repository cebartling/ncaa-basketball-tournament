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
    });
})();
