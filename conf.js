exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',


    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },


    specs: ['./test/specs/**/*.js'],


    suites: {
        login: './test/specs/login.spec.js',
        filters: './test/specs/filters.spec.js',
        create: "./test/specs/create-wrestler.spec.js",
        edit: "./test/specs/edit-wrestler.spec.js",
        remove: './test/specs/remove-record.spec.js',
        view: './test/specs/view-wrestler-info.spec.js',
        search: "./test/specs/search.filters.spec.js",
        smoke: ['', '']
    },


    beforeLaunch: function() {},

    
    onPrepare: function() {
        browser.driver.manage().window().maximize();

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        
        /* On Mac with allure command line tools installed
         *
         * allure generate .allure-results
         * allure report open
         */
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });


        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './target/reports/',
                screenshotsFolder: 'screenshots',
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true
            })
        );
    },
   

    onComplete: function() {},

    
    onCleanUp: function(exitCode) {},

    
    afterLaunch: function(exitCode) {},

    
    restartBrowserBetweenTests: false,


    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};