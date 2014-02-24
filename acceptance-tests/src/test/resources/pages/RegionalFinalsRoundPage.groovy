package pages

import geb.Page;

class RegionalFinalsRoundPage extends Page {

    static at = {
        waitFor('quick') {
            $('h3').text() == 'Regional Finals'
        }
    }

    void assertNavigationPillForViewIsActive() {
        assert $('ul.nav > li.active > a[href="#round5"').text() == 'Regional Finals'
    }

    void assertNumberOfBrackets() {
        assert $('div.tournament-bracket-view').size() == 4
    }
}