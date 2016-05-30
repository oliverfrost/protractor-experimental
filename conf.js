exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',


    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['./test/specs/**/*.js'],


    suites: {
        homepage: 'tests/e2e/homepage/**/*Spec.js',
        search: ['tests/e2e/contact_search/**/*Spec.js',
            'tests/e2e/venue_search/**/*Spec.js']
    },
    
    
    jasmineNodeOpts: {
        showColors: true, 
    }
};