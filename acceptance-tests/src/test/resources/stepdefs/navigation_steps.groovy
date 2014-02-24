package stepdefs

import pages.*

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)
this.metaClass.mixin(geb.Browser)


When(~'^I navigate to the website$') { ->
    browser.go('http://localhost:9000')
}


And(~'^I click the "([^"]*)" navigation pill link$') { String navPillText ->
    page.$('a', text: navPillText).click()
}


Then(~'^I should see the first round brackets$') { ->
    at(FirstRoundPage)
    page.assertNavigationPillForViewIsActive()
    page.assertNumberOfBrackets()
}

Then(~'^I should see the second round brackets$') { ->
    at(SecondRoundPage)
    page.assertNavigationPillForViewIsActive()
    page.assertNumberOfBrackets()
}

Then(~'^I should see the third round brackets$') { ->
    at(ThirdRoundPage)
    page.assertNavigationPillForViewIsActive()
    page.assertNumberOfBrackets()
}

Then(~'^I should see the regional semifinals round brackets$') { ->
    at(RegionalSemifinalsRoundPage)
    page.assertNavigationPillForViewIsActive()
    page.assertNumberOfBrackets()
}

Then(~'^I should see the regional finals round brackets$') { ->
    at(RegionalFinalsRoundPage)
    page.assertNavigationPillForViewIsActive()
    page.assertNumberOfBrackets()
}

Then(~'^I should see the national semifinals round brackets$') { ->
    at(NationalSemifinalsRoundPage)
    page.assertNavigationPillForViewIsActive()
    page.assertNumberOfBrackets()
}

Then(~'^I should see the national championship round bracket$') { ->
    at(NationalChampionshipRoundPage)
    page.assertNavigationPillForViewIsActive()
    page.assertNumberOfBrackets()
}


