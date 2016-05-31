var properties = require("../../properties");
var LoginPage = require("../../lib/LoginPage");

describe('Login / Logout Suite', function () {
    it('Should login with correct credentials', function () {
        LoginPage.open();
        LoginPage.typeLogin(properties.login);
        LoginPage.typePassword(properties.password);
        LoginPage.clickSubmitButton();
        expect(element(by.model('searchFor')).isDisplayed()).toBeTruthy();
    });


    it('Should not login with incorrect credentials', function(){
        LoginPage.open();
        LoginPage.typeLogin("incorrect_login");
        LoginPage.typePassword("incorrect_password");
        LoginPage.clickSubmitButton();
        expect(element(by.xpath(".//div[text()='Incorrect credentials']")).isDisplayed()).toBeTruthy();
    });
});