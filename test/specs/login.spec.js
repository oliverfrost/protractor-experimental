let properties = require("../../properties");
let LoginPage = require("../../lib/LoginPage");
let WrestlersPage  = require("../../lib/WrestlersPage");


describe('Login / Logout Suite', function () {
    it('Should login with correct credentials', function () {
        LoginPage.open();
        LoginPage.typeLogin(properties.login);
        LoginPage.typePassword(properties.password);
        LoginPage.clickSubmitButton();

        expect(WrestlersPage.searchField.isDisplayed()).toBeTruthy();
        expect(WrestlersPage.searchButton.isDisplayed()).toBeTruthy();
    });


    it('Should not login with incorrect credentials', function(){
        LoginPage.open();
        LoginPage.typeLogin("incorrect_login");
        LoginPage.typePassword("incorrect_password");
        LoginPage.clickSubmitButton();

        expect(LoginPage.incorrectCredentialsWarning.isDisplayed()).toBeTruthy();        
    });
});