let properties = require("../../properties");
let LoginPage = require("../../lib/LoginPage");
let WrestlersListPage = require("../../lib/WrestlersListPage");
let WrestlerPage = require("../../lib/WrestlerPage");


describe('Remove record from the list', function () {
    beforeEach(function () {
        browser.manage().deleteAllCookies();
        LoginPage.login(properties.login, properties.password);
    });


    it('Should remove first record from the table', function () {
        let rowIndex = 1;

        WrestlersListPage.getRecordIdByIndex(rowIndex).then(function (id) {
            WrestlersListPage.getRowById(id).click();
            WrestlerPage.clickDeleteButton();
            WrestlerPage.confirmRecordRemoval();
            WrestlersListPage.searchForRecord(id);

            expect(WrestlersListPage.allRecordsOnThePage.count()).toBe(0);
        })
    });
});

