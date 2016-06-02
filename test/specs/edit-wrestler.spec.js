let user = require("../../user");
let LoginPage = require("../../lib/LoginPage");
let WrestlersListPage = require("../../lib/WrestlersListPage");
let WrestlerPage = require("../../lib/WrestlerPage");
let iWrestler = require("../../entities/IWrestler");

describe('Edit wrestler', function () {
     beforeEach(function () {
        browser.manage().deleteAllCookies();
        LoginPage.login(user.login, user.password);
    });
    

    xit('Edit wrestler', function () {
        let editId = WrestlersListPage.getRandomId();
        WrestlersListPage.searchForRecord(editId);
        console.log(editId);
        browser.wait(WrestlerPage.lastName.isPresent(), 1000);
        WrestlerPage.typeLastName(iWrestler.lastName);
    });
});