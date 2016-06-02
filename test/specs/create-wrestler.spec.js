let user = require("../../user");
let loginPage = require("../../lib/LoginPage");
let wrestlersListPage = require("../../lib/WrestlersListPage");
let wrestlerPage = require("../../lib/WrestlerPage");
let iWrestler = require("../../entities/IWrestler");

describe('Create new wrestler', function () {
    beforeEach(function () {
        browser.manage().deleteAllCookies();
        loginPage.login(user.login, user.password);
    });

    it('Create button should be active', function () {
        wrestlersListPage.newWrestler();
        wrestlerPage.typeLastName(iWrestler.lastName);
        wrestlerPage.typeFirstName(iWrestler.firstName);
        wrestlerPage.typeDateOfBirth("07-10-1990");
        wrestlerPage.typeMiddleName(iWrestler.middle);
        wrestlerPage.selectRegion("AR Krym");
        wrestlerPage.selectFst("Kolos");
        wrestlerPage.selectStyle("FS");
        wrestlerPage.selectAge("Cadet");
        wrestlerPage.selectYear(iWrestler.year);

        expect(wrestlerPage.isCreateButtonClickable()).toBeTruthy("Create button should be active");
    });
});