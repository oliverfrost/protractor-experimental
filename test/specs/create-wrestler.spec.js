var user = require("../../user");
var LoginPage = require("../../lib/LoginPage");
var WrestlersPage = require("../../lib/WrestlersPage");
var NewWrestlerPage = require("../../lib/NewWrestlerPage");
var iWrestler = require("../../entities/IWrestler");


describe('Create new wrestler', function () {
    var wrestlersPage = new WrestlersPage(),
        newWrestlerPage = new NewWrestlerPage();

    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();

        LoginPage.open();
        LoginPage.typeLogin(user.login);
        LoginPage.typePassword(user.password);
        LoginPage.clickSubmitButton();
    });
    
    it('Create button should be active', function () {
        wrestlersPage.newWrestler();
        newWrestlerPage.typeLastName(iWrestler.lastName);
        newWrestlerPage.typeFirstName(iWrestler.firstName);
        newWrestlerPage.typeDateOfBirth("07-10-90");
        newWrestlerPage.typeMiddleName(iWrestler.middle);
        newWrestlerPage.selectRegion("AR Krym");
        newWrestlerPage.selectFst("Kolos");
        newWrestlerPage.selectStyle("FS");
        newWrestlerPage.selectAge("Cadet");
        newWrestlerPage.selectYear(iWrestler.year);
        expect(newWrestlerPage.isCreateButtonClickable()).toBeTruthy("Create button should be active");
    });
});