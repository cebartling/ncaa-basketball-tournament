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

            it('sets up the click round link event wiring in the events hash', function () {
                expect(view.events['click a']).toBe('onClickRoundLink');
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

        describe('onClickRoundLink', function () {
            beforeEach(function () {
                view.render();
            });

            it('wires up the event handler to the DOM', function () {
                var spy = spyOn(view, 'onClickRoundLink');
                view.delegateEvents();
                view.$el.find('a[href="#round1"]').click();
                expect(spy).toHaveBeenCalled();
                var eventArg = spy.mostRecentCall.args[0];
                expect(eventArg instanceof jQuery.Event).toBeTruthy();
            });

            it('remove the "active" CSS class from all links', function () {
                view.$el.find('li').addClass('active');
                view.$el.find('a[href="#round1"]').click();
                // We get one active at the end of the event handler.
                expect(view.$el.find('li.active').length).toBe(1);
            });

            it('adds the "active" CSS class to the event target LI element', function () {
                view.$el.find('a[href="#round1"]').parent().removeClass('active');
                view.$el.find('a[href="#round1"]').click();
                expect(view.$el.find('a[href="#round1"]').parent().hasClass('active')).toBeTruthy();
            });
        });
    });
})();


