var properties = require("../../properties");
var LoginPage = require("../../lib/LoginPage");
var WrestlersPage = require("../../lib/WrestelersPage");
var NewWrestlerPage = require("../../lib/NewWrestlerPage");

describe('Create new wrestler', function () {

    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();
        // var wrestlersPage = new WrestlersPage();
        // var newWrestlerPage = new NewWrestlerPage();

        LoginPage.open();
        LoginPage.typeLogin(properties.login);
        LoginPage.typePassword(properties.password);
        LoginPage.clickSubmitButton();
    });
    
    it('Create wrestler', function () {
        var wrestlersPage = new WrestlersPage();
        wrestlersPage.newWrestler();
        console.log("123");
        var newWrestlerPage = new NewWrestlerPage();
        newWrestlerPage.typeLastName("Dima");
        newWrestlerPage.typeFirstName("Zhora");
        newWrestlerPage.typeDateOfBirth("12-12-12");
        newWrestlerPage.typeMiddleName("Junior");
        newWrestlerPage.selectRegion("AR Krym");
        newWrestlerPage.selectFst("Kolos");
        newWrestlerPage.selectStyle("FS");
        newWrestlerPage.selectAge("Cadet");
        newWrestlerPage.selectYear("2014");
        expect(newWrestlerPage.isCreateButtonClickable()).toBeTruthy("Create button should be active");
    });
});