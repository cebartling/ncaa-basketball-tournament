package pages

import geb.Page;

class NationalChampionshipRoundPage extends Page {

    static at = {
        waitFor('quick') {
            $('h3').text() == 'National Championship'
        }
    }

    void assertNavigationPillForViewIsActive() {
        assert $('ul.nav > li.active > a[href="#round7"').text() == 'National Championship'
    }

    void assertNumberOfBrackets() {
        assert $('div.tournament-bracket-view').size() == 1
    }
}