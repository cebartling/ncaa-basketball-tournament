// Karma configuration
// Generated on Sat Dec 07 2013 20:10:44 GMT-0600 (CST)

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '.',


        // frameworks to use
        frameworks: ['jasmine'],


        files: [
            'app/bower_components/jquery/jquery.js',
            'app/bower_components/underscore/underscore.js',
            'app/bower_components/backbone/backbone.js',
            'app/bower_components/handlebars/handlebars.js',
            'app/bower_components/bootstrap/dist/js/bootstrap.js',
            'test/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
            'app/scripts/namespaces.js',
            'app/scripts/**/*.js',
            'test/spec/**/*-spec.js',
            'test/spec/javascripts/helpers/*.js',
            { pattern: 'test/spec/javascripts/fixtures/*', included: false }
        ],


        // list of files to exclude
        exclude: [
            'app/scripts/main.js'
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],
//        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/scripts/*.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }
    });
};
