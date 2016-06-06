var user = require("../../user"),
    loginPage = require("../../lib/LoginPage"),
    wrestlerPage = require("../../lib/WrestlerPage"),
    wrestlersListPage = require("../../lib/WrestlersListPage");

describe('View wrestlers info and verify it matches info on main page', function () {
    beforeEach(function () {
        browser.manage().deleteAllCookies();
        loginPage.login(user.login, user.password);
    });


    it('Should filter wrestlers by region', function (region = "Zaporizka") {
        wrestlersListPage.setRegionFilter(region);

        expect(wrestlersListPage.getRegionByRowIndex(1)).toBe(region);
    });


    it('Should filter wrestlers by club(fst)', function (fst = "Spartak") {
        wrestlersListPage.setFstFilter(fst);

        expect(wrestlersListPage.getFSTByRowIndex(1)).toBe(fst);
    });


    it('Should filter wrestlers by license year', function (year = "2013") {
        wrestlersListPage.setLinceYearFilter(year);

        expect(wrestlersListPage.getLicenseByRowIndex(1)).toBe(year);
    });

    it('Should filter wrestlers by region, club and year', function () {
        let region = "Kyivska",
            fst = "Dinamo",
            year = "2016";

        wrestlersListPage.setRegionFilter(region);
        wrestlersListPage.setFstFilter(fst);
        wrestlersListPage.setLinceYearFilter(year);

        expect(wrestlersListPage.getRegionByRowIndex(1)).toBe(region);
        expect(wrestlersListPage.getFSTByRowIndex(1)).toBe(fst);
        expect(wrestlersListPage.getLicenseByRowIndex(1)).toBe(year);
    });
});