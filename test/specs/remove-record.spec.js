let user = require("../../user");
let loginPage = require("../../lib/LoginPage");
let wrestlersListPage = require("../../lib/WrestlersListPage");
let wrestlerPage = require("../../lib/WrestlerPage");


describe('Remove record from the list', function () {
    beforeEach(function () {
        browser.manage().deleteAllCookies();
        loginPage.login(user.login, user.password);
    });

    it('Should remove first record from the table', function () {
        let rowIndex = 1;

        wrestlersListPage.getRecordIdByIndex(rowIndex).then(function (id) {
            wrestlersListPage.getRowById(id).click();
            wrestlerPage.clickDeleteButton();
            wrestlerPage.confirmRecordRemoval();
            wrestlersListPage.searchForRecord(id);

            expect(wrestlersListPage.allRecordsOnThePage.count()).toBe(0);
        })
    });
});

