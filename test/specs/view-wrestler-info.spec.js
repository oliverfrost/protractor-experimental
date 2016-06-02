var properties = require("../../properties");
var LoginPage = require("../../lib/LoginPage");
var WrestlerPage = require("../../lib/WrestlerPage");
var WrestlersListPage = require("../../lib/WrestlersListPage");

describe('View wrestlers info and verify it matches info on main page', function () {
    beforeEach(function () {
        browser.manage().deleteAllCookies();
        LoginPage.login(properties.login, properties.password);
    });


    it('Shoud open new tab', function () {
        WrestlersListPage.getRowByIndex(1).click();

        expect(WrestlersListPage.tabs.count()).toBe(2);
    });


    it('Should open wrestlers page and then close it', function () {
        WrestlersListPage.getRowByIndex(1).click();
        WrestlersListPage.closeTab();

        expect(WrestlersListPage.searchField.isDisplayed()).toBeTruthy();
    });


    xit('Should open wrestler`s info and check it', function () {
        pending('Will be implemented later');
    });
});