package stepdefs

this.metaClass.mixin(cucumber.api.groovy.Hooks)
this.metaClass.mixin(cucumber.api.groovy.EN)
this.metaClass.mixin(geb.Browser)



And(~'^I wait for (\\d+) seconds$') { int seconds ->
    Thread.sleep(seconds * 1000)
}