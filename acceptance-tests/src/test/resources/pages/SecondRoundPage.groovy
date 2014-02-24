package pages

import geb.Page;

class SecondRoundPage extends Page {

    static at = {
        waitFor('quick') {
            $('h3').text() == 'Second round'
        }
    }

    void assertNavigationPillForViewIsActive() {
        assert $('ul.nav > li.active > a[href="#round2"').text() == 'Second round'
    }

    void assertNumberOfBrackets() {
        assert $('div.tournament-bracket-view').size() == 32
    }
}