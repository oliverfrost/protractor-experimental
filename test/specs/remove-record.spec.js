let user = require("../../user");
let LoginPage = require("../../lib/LoginPage");
let WrestlersPage = require("../../lib/WrestlersPage");
let NewWrestlerPage = require("../../lib/NewWrestlerPage");


describe('Remove record from the list', function () {

    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();

        LoginPage.open();
        LoginPage.typeLogin(user.login);
        LoginPage.typePassword(user.password);
        LoginPage.clickSubmitButton();
    });


    it('Should remove first record from the table', function () {
        let wrestlersPage = new WrestlersPage(),
            newWrestlerPage = new NewWrestlerPage(),
            rowIndex = 1;

        wrestlersPage.getRecordIdByIndex(rowIndex).then(function (id) {
            wrestlersPage.getRowById(id).click();
            newWrestlerPage.clickDeleteButton();
            newWrestlerPage.confirmRecordRemoval();
            wrestlersPage.searchForRecord(id);

            expect(wrestlersPage.allRecordsOnThePage.count()).toBe(0);
        })
    });
});

