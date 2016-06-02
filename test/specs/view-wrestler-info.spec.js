var properties = require("../../properties");
var LoginPage = require("../../lib/LoginPage");
var NewWrestlerPage = require("../../lib/NewWrestlerPage");
var WrestlersPage = require("../../lib/WrestlersPage");

describe('View wrestlers info and verify it matches info on main page', function () {
    wrestlersPage = new WrestlersPage();
    newWrestlerPage = new NewWrestlerPage();


    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();

        LoginPage.open();
        LoginPage.typeLogin(properties.login);
        LoginPage.typePassword(properties.password);
        LoginPage.clickSubmitButton();
    });


    it('Shoud open new tab', function () {
        wrestlersPage.getRowByIndex(1).click();

        expect(wrestlersPage.tabs.count()).toBe(2);
    });


    it('Should open wrestlers page and then close it', function () {
        wrestlersPage.getRowByIndex(1).click();
        newWrestlerPage.closeTab();

        expect(element(by.model('searchFor')).isDisplayed()).toBeTruthy();
    });


    xit('Should open wrestler`s info and check it', function () {
        pending('Will be implemented later');
    });
});