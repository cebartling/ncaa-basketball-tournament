package pages

import geb.Page;

class ThirdRoundPage extends Page {

    static at = {
        waitFor('quick') {
            $('h3').text() == 'Third round'
        }
    }

    void assertNavigationPillForViewIsActive() {
        assert $('ul.nav > li.active > a[href="#round3"').text() == 'Third round'
    }

    void assertNumberOfBrackets() {
        assert $('div.tournament-bracket-view').size() == 16
    }
}