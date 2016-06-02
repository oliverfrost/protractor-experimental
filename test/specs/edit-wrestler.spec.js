var user = require("../../user");
var LoginPage = require("../../lib/LoginPage");
var WrestlersPage = require("../../lib/WrestlersPage");
var NewWrestlerPage = require("../../lib/NewWrestlerPage");
var iWrestler = require("../../entities/IWrestler");

describe('Edit wrestler', function () {
    var wrestlersPage = new WrestlersPage(),
        newWrestlerPage = new NewWrestlerPage();

    beforeEach(function () {

        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();

        LoginPage.open();
        LoginPage.typeLogin(user.login);
        LoginPage.typePassword(user.password);
        LoginPage.clickSubmitButton();
    });

    xit('Edit wrestler', function () {
        let editId = wrestlersPage.getRandomId();
        wrestlersPage.searchForRecord(editId);
        console.log(editId);
        browser.wait(newWrestlerPage.lastName.isPresent(), 1000);
        newWrestlerPage.typeLastName(iWrestler.lastName);
    });
});