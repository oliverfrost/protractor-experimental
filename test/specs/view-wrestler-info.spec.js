var user = require("../../user");
var loginPage = require("../../lib/LoginPage");
var wrestlerPage = require("../../lib/WrestlerPage");
var wrestlersListPage = require("../../lib/WrestlersListPage");

describe('View wrestlers info and verify it matches info on main page', function () {
    beforeEach(function () {
        browser.manage().deleteAllCookies();
        loginPage.login(user.login, user.password);
    });


    it('Shoud open new tab', function () {
        wrestlersListPage.getRowByIndex(1).click();

        expect(wrestlersListPage.tabs.count()).toBe(2);
    });


    it('Should open wrestlers page and then close it', function () {
        wrestlersListPage.getRowByIndex(1).click();
        wrestlersListPage.closeTab();

        expect(wrestlersListPage.searchField.isDisplayed()).toBeTruthy();
    });


    it('Should open first wrestler info and check it', function () {
        let rowIndex = 1,
            region = wrestlersListPage.getRegionByRowIndex(rowIndex),
            fst = wrestlersListPage.getFSTByRowIndex(rowIndex),
            license = wrestlersListPage.getLicenseByRowIndex(rowIndex),
            style = wrestlersListPage.getStyleByRowIndex(rowIndex);
       
        wrestlersListPage.getRowByIndex(rowIndex).click();

        expect(region).toBe(wrestlerPage.region);
        expect(fst).toBe(wrestlerPage.fst);
        expect(license).toBe(wrestlerPage.year);
        expect(style).toBe(wrestlerPage.style);
    });
});