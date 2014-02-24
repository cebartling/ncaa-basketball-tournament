package pages

import geb.Page;

class NationalSemifinalsRoundPage extends Page {

    static at = {
        waitFor('quick') {
            $('h3').text() == 'National Semifinals'
        }
    }

    void assertNavigationPillForViewIsActive() {
        assert $('ul.nav > li.active > a[href="#round6"').text() == 'National Semifinals'
    }

    void assertNumberOfBrackets() {
        assert $('div.tournament-bracket-view').size() == 2
    }
}