let properties = require("../../properties");
let LoginPage = require("../../lib/LoginPage");
let WrestlersPage = require("../../lib/WrestlersPage");
let NewWrestlerPage = require("../../lib/NewWrestlerPage");


describe('Remove record from the list', function () {

    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();

        LoginPage.open();
        LoginPage.typeLogin(properties.login);
        LoginPage.typePassword(properties.password);
        LoginPage.clickSubmitButton();
    });


    it('Should remove first record from the table', function () {
        wrestlersPage = new WrestlersPage();
        newWrestlerPage = new NewWrestlerPage();

        wrestlersPage.getRecordIdByIndex(1).then(function (id) {
            wrestlersPage.getRowById(id).click();
            newWrestlerPage.clickDeleteButton();
            newWrestlerPage.confirmRecordRemoval();
            wrestlersPage.searchForRecord(id);
            
            expect(wrestlersPage.allRecordsOnThePage.count()).toBe(0);
        })
    });
});

