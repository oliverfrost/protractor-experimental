let user = require("../../user");
let loginPage = require("../../lib/LoginPage");
let wrestlersListPage = require("../../lib/WrestlersListPage");

describe('Changing amount of records on the page', function () {

    beforeEach(function () {
        browser.manage().deleteAllCookies();
        loginPage.login(user.login, user.password);
    });

    it('Should verify 25 wrestlers are listed on the page', function () {
        wrestlersListPage.setAmountOfRecordsOnPage(25);
        expect(wrestlersListPage.allRecordsOnThePage.count()).toBe(25);
    });

    it('Should verify 50 wrestlers are listed on the page', function () {
        wrestlersListPage.setAmountOfRecordsOnPage(50);
        expect(wrestlersListPage.allRecordsOnThePage.count()).toBe(50);
    });

    it('Should verify 100 wrestlers are listed on the page', function () {
        wrestlersListPage.setAmountOfRecordsOnPage(100);
        expect(wrestlersListPage.allRecordsOnThePage.count()).toBe(100);
    });
});