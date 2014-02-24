package pages

import geb.Page;

class RegionalSemifinalsRoundPage extends Page {

    static at = {
        waitFor('quick') {
            $('h3').text() == 'Regional Semifinals'
        }
    }

    void assertNavigationPillForViewIsActive() {
        assert $('ul.nav > li.active > a[href="#round4"').text() == 'Regional Semifinals'
    }

    void assertNumberOfBrackets() {
        assert $('div.tournament-bracket-view').size() == 8
    }
}