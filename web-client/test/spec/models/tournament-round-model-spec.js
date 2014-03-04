(function () {
    'use strict';

    describe('BasketballTournament.Models.TournamentRoundModel', function () {
        var model;

        beforeEach(function () {
            model = new BasketballTournament.Models.TournamentRoundModel({}, {round: 1});
        });

        describe('initialize function', function () {

            it('should set the passed round option to the instance var round', function () {
                expect(model.round).toBe(1);
            });
        });

        describe('url function', function () {

            it('should return "/round/1"', function () {
                expect(model.url()).toBe('/round/1')
            });
        });
    });
})();


