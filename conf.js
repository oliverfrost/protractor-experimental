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
        new_wrestler: "./test/specs/create-wrestler.spec.js",
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