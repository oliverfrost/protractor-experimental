let user = require("../../user"),
    loginPage = require("../../lib/LoginPage"),
    wrestlersListPage = require("../../lib/WrestlersListPage"),
    wrestlerPage = require("../../lib/WrestlerPage"),
    iWrestler = require("../../entities/IWrestler");

describe('Create new wrestler', function () {
    beforeEach(function () {
        this.lastname = iWrestler.lastName ;
        this.firstname = iWrestler.firstName;
        this.middlename = iWrestler.middle;
        browser.manage().deleteAllCookies();
        loginPage.login(user.login, user.password);
        wrestlersListPage.newWrestler();
        wrestlerPage.fillInWrestler(this.lastname, this.firstname, this.middlename, iWrestler.year);
    });

    it('Create button should be active', function () {
        expect(wrestlerPage.isCreateButtonActive).toBeTruthy("Create button should be active");
    });
    
    it('Wrestler should be created', function () {
        let fullName = this.lastname + " " + this.firstname + " " + this.middlename;

        wrestlerPage.clickCreateButton();
        wrestlersListPage.closeTab();
        wrestlersListPage.searchForRecord(fullName);
        wrestlersListPage.allRecordsOnThePage
            .then(function (rows) {
                expect(rows.length).toBe(1, "Searching should to show one line");
            });
        wrestlersListPage.getRowByIndex(1).getText()
            .then(function (rowText) {
                expect(rowText).toContain(fullName, `Row doesn't contain ${fullName}`);
            });
    });
});