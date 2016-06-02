let user = require("../../user");
let loginPage = require("../../lib/LoginPage");
let wrestlersListPage = require("../../lib/WrestlersListPage");


describe('Login / Logout Suite', function () {
    beforeEach(function () {
        browser.manage().deleteAllCookies();
    });

    it('Should login with correct credentials', function () {
        loginPage.open();
        loginPage.typeLogin(user.login);
        loginPage.typePassword(user.password);
        loginPage.clickSubmitButton();

        expect(wrestlersListPage.searchField.isDisplayed()).toBeTruthy();
        expect(wrestlersListPage.searchButton.isDisplayed()).toBeTruthy();
    });

    it('Should not login with incorrect credentials', function () {
        loginPage.open();
        loginPage.typeLogin("incorrect_login");
        loginPage.typePassword("incorrect_password");
        loginPage.clickSubmitButton();

        expect(loginPage.incorrectCredentialsWarning.isDisplayed()).toBeTruthy();
    });
});