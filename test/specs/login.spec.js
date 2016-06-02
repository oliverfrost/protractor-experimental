let user = require("../../user");
let LoginPage = require("../../lib/LoginPage");
let WrestlersListPage = require("../../lib/WrestlersListPage");


describe('Login / Logout Suite', function () {
    beforeEach(function () {
        browser.manage().deleteAllCookies();
    });


    it('Should login with correct credentials', function () {
        LoginPage.open();
        LoginPage.typeLogin(user.login);
        LoginPage.typePassword(user.password);
        LoginPage.clickSubmitButton();

        expect(WrestlersListPage.searchField.isDisplayed()).toBeTruthy();
        expect(WrestlersListPage.searchButton.isDisplayed()).toBeTruthy();
    });


    it('Should not login with incorrect credentials', function () {
        LoginPage.open();
        LoginPage.typeLogin("incorrect_login");
        LoginPage.typePassword("incorrect_password");
        LoginPage.clickSubmitButton();

        expect(LoginPage.incorrectCredentialsWarning.isDisplayed()).toBeTruthy();
    });
});