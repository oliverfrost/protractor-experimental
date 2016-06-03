let user = require("../../user"),
    loginPage = require("../../lib/LoginPage"),
    wrestlersListPage = require("../../lib/WrestlersListPage"),
    wrestlerPage = require("../../lib/WrestlerPage");


describe('Remove record from the list', function () {
    beforeEach(function () {
        browser.manage().deleteAllCookies();
        loginPage.login(user.login, user.password);
    });

    it('Should remove first record from the table', function () {
        let rowIndex = 1;

        wrestlersListPage.getRecordIdByRowIndex(rowIndex).then(function (id) {
            wrestlersListPage.getRowById(id).click();
            wrestlerPage.clickDeleteButton();
            wrestlerPage.confirmRecordRemoval();
            wrestlersListPage.searchForRecord(id);

            expect(wrestlersListPage.allRecordsOnThePage.count()).toBe(0);
        })
    });
});

