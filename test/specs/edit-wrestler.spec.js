let user = require("../../user");
let loginPage = require("../../lib/LoginPage");
let wrestlersListPage = require("../../lib/WrestlersListPage");
let wrestlerPage = require("../../lib/WrestlerPage");
let iWrestler = require("../../entities/IWrestler");

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