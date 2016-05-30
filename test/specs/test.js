var properties = require("../../properties");
var LoginPage = require("../../lib/LoginPage");

describe('Protractor Login Suite', function () {
    it('Should login', function () {
        browser.get('http://streamtv.net.ua/base/');
        LoginPage.typeLogin(properties.login);
        LoginPage.typePassword(properties.password);
        LoginPage.clickSubmitButton();
        expect(element(by.model('searchFor')).isDisplayed()).toBeTruthy();
    });
});