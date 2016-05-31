let properties = require("../../properties");
let LoginPage = require("../../lib/LoginPage");
let WrestlersPage = require("../../lib/WrestlersPage");
let NewRestlerPage = require("../../lib/NewWrestlerPage");


describe('Remove record from the list', function () {

    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();

        LoginPage.open();
        LoginPage.typeLogin(properties.login);
        LoginPage.typePassword(properties.password);
        LoginPage.clickSubmitButton();
    });

    


        it('Should remove record from the table', function() {
            let recordId = 6363;

            wrestlersPage = new WrestlersPage();
            newRestlerPage = new NewWrestlerPage();


            wrestlersPage.getRecordRow().click();
            newRestlerPage.clickDeleteButton();

            wrestlersPage.



    

        });

});