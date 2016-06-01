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
        new_wrestler: "./test/specs/create-wrestler.spec.js",
        remove: './test/specs/remove-record.spec.js',
        view: './test/specs/view-wrestler-info.spec.js'
            
        // search: ['tests/e2e/contact_search/**/*Spec.js',
        //     'tests/e2e/venue_search/**/*Spec.js']
    },


    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};