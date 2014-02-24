package pages

import geb.Page;

class FirstRoundPage extends Page {

    static at = {
        waitFor {
            $('h3').text() == 'First round'
        }
    }

    void assertNavigationPillForViewIsActive() {
        assert $('ul.nav > li.active > a[href="#round1"').text() == 'First round'
    }

    void assertNumberOfBrackets() {
        assert $('div.tournament-bracket-view').size() == 4
    }
}