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
    

    it('Edit name of wrestler', function () {
        WrestlersListPage.getRandomId()
            .then(function (id) {
                let lastName = iWrestler.lastName;
                WrestlersListPage.searchForRecord(id);
                browser.wait(WrestlerPage.lastName.isPresent(), 1000);
                WrestlerPage.typeLastName(lastName);
                WrestlerPage.saveRecord();
                expect(WrestlersListPage.fetchActiveTabText()).toContain(lastName);
                WrestlersListPage.closeTab();
                expect(WrestlersListPage.getRowById(id).getText()).toContain(lastName);
            });
    });
});