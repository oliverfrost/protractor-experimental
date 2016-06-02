let user = require("../../user");
let LoginPage = require("../../lib/LoginPage");
let WrestlersListPage = require("../../lib/WrestlersListPage");
let WrestlerPage = require("../../lib/WrestlerPage");
let iWrestler = require("../../entities/IWrestler");


describe('Create new wrestler', function () {
    beforeEach(function () {
        browser.manage().deleteAllCookies();
        LoginPage.login(user.login, user.password);
    });


    it('Create button should be active', function () {
        WrestlersListPage.newWrestler();
        WrestlerPage.typeLastName(iWrestler.lastName);
        WrestlerPage.typeFirstName(iWrestler.firstName);
        WrestlerPage.typeDateOfBirth("07-10-1990");
        WrestlerPage.typeMiddleName(iWrestler.middle);
        WrestlerPage.selectRegion("AR Krym");
        WrestlerPage.selectFst("Kolos");
        WrestlerPage.selectStyle("FS");
        WrestlerPage.selectAge("Cadet");
        WrestlerPage.selectYear(iWrestler.year);
        WrestlerPage.clickCreateButton();


        expect(WrestlerPage.isCreateButtonClickable()).toBeFalsy();
        expect(WrestlerPage.photoDivHeader.isDisplayed()).toBeTruthy();
        expect(WrestlerPage.documentsDivHeader.isDisplayed()).toBeTruthy();
    });
});