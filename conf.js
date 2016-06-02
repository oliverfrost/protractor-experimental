exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',


    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },


    specs: ['./test/specs/**/*.js'],


    suites: {
        login: './test/specs/login.js',
        filters: './test/specs/filters.js',
        create: "./test/specs/create-wrestler.spec.js",
        edit: "./test/specs/edit-wrestler.spec.js",
        remove: './test/specs/remove-record.spec.js',
        view: './test/specs/view-wrestler-info.spec.js',
        smoke: ['', '']
    },


    beforeLaunch: function() {},

    
    onPrepare: function() {
        browser.driver.manage().window().maximize();
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