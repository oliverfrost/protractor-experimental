var properties = require("../../properties");
var LoginPage = require("../../lib/LoginPage");
let WrestlersListPage = require("../../lib/WrestlersListPage");

describe('Changing amount of records on the page', function () {

    beforeEach(function () {
        browser.manage().deleteAllCookies();
        LoginPage.login(properties.login, properties.password);
    });


    it('Should verify 25 wrestlers are listed on the page', function () {
        WrestlersListPage.setAmountOfRecordsOnPage(25);
        expect(WrestlersListPage.allRecordsOnThePage.count()).toBe(25);
    });


    it('Should verify 50 wrestlers are listed on the page', function () {
        WrestlersListPage.setAmountOfRecordsOnPage(50);
        expect(WrestlersListPage.allRecordsOnThePage.count()).toBe(50);
    });


    it('Should verify 100 wrestlers are listed on the page', function () {
        WrestlersListPage.setAmountOfRecordsOnPage(100);
        expect(WrestlersListPage.allRecordsOnThePage.count()).toBe(100);
    });
});