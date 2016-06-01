var properties = require("../../properties");
var LoginPage = require("../../lib/LoginPage");
var WrestlersPage = require("../../lib/WrestlersPage");
var NewWrestlerPage = require("../../lib/NewWrestlerPage");
var Chance = require('chance');


describe('Create new wrestler', function () {
    let chance = new Chance();
    var wrestlersPage = new WrestlersPage(),
        newWrestlerPage = new NewWrestlerPage();

    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();

        LoginPage.open();
        LoginPage.typeLogin(properties.login);
        LoginPage.typePassword(properties.password);
        LoginPage.clickSubmitButton();
    });
    
    it('Create wrestler', function () {
        let firstName = chance.last(),
            lastName = chance.last(),
            middle = chance.last(),
            year = chance.year({min: 2013, max: 2017});

        wrestlersPage.newWrestler();
        newWrestlerPage.typeLastName(lastName);
        newWrestlerPage.typeFirstName(firstName);
        newWrestlerPage.typeDateOfBirth("07-10-90");
        newWrestlerPage.typeMiddleName(middle);
        newWrestlerPage.selectRegion("AR Krym");
        newWrestlerPage.selectFst("Kolos");
        newWrestlerPage.selectStyle("FS");
        newWrestlerPage.selectAge("Cadet");
        newWrestlerPage.selectYear(year);
              
        expect(newWrestlerPage.isCreateButtonClickable()).toBeTruthy("Create button should be active");
    });
});