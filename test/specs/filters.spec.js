var properties = require("../../properties");
var LoginPage = require("../../lib/LoginPage");
let WrestlersPage = require("../../lib/WrestlersPage");

describe('Changing amount of records on the page', function () {

    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();

        LoginPage.open();
        LoginPage.typeLogin(properties.login);
        LoginPage.typePassword(properties.password);
        LoginPage.clickSubmitButton();
    });
  

    it('Should verify 25 wrestlers are listed on the page', function () {
        let wrestlersPage = new WrestlersPage();

        wrestlersPage.setAmountOfRecordsOnPage(25);
        expect(wrestlersPage.allRecordsOnThePage.count()).toBe(25);
    });


    it('Should verify 50 wrestlers are listed on the page', function () {
        let wrestlersPage = new WrestlersPage();

        wrestlersPage.setAmountOfRecordsOnPage(50);
        expect(wrestlersPage.allRecordsOnThePage.count()).toBe(50);
    });


    it('Should verify 100 wrestlers are listed on the page', function () {
        let wrestlersPage = new WrestlersPage();

        wrestlersPage.setAmountOfRecordsOnPage(100);
        expect(wrestlersPage.allRecordsOnThePage.count()).toBe(100);
    });
});