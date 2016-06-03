let user = require("../../user"),
    loginPage = require("../../lib/LoginPage"),
    wrestlersListPage = require("../../lib/WrestlersListPage"),
    wrestlerPage = require("../../lib/WrestlerPage"),
    iWrestler = require("../../entities/IWrestler");

describe('Edit wrestler', function () {
     beforeEach(function () {
         browser.manage().deleteAllCookies();
         loginPage.login(user.login, user.password);
    });

    it('Edit name of wrestler', function () {
        wrestlersListPage.getRandomId()
            .then(function (id) {
                let lastName = iWrestler.lastName;
                wrestlersListPage.searchForRecord(id);
                wrestlerPage.typeLastName(lastName);
                wrestlerPage.clickCreateButton();
                expect(wrestlersListPage.fetchActiveTabText()).toContain(lastName);
                wrestlersListPage.closeTab();
                expect(wrestlersListPage.getRowById(id).getText()).toContain(lastName);
            });
    });
});