let BasePage = require("./BasePage");
let NumbersHelper = require("../helpers/NumbersHelper");


class WrestlersPage extends BasePage {
    /* Get the list of all wrestlers on the page
     @return array of table rows with names
     */
    get allRecordsOnThePage() {
        return element.all(by.xpath(".//table[@class='table table-striped table-hover']//tr"));
    }

    /*
     Chooses value in select that change amount of records on the page.
     25, 50 and 100 available only.
     */
    setAmountOfRecordsOnPage(number) {
        if (NumbersHelper.isInt(number)) {
            element(by.cssContainingText('option', number)).click();
        } else {
            throw new Error(`[ERROR] It is not allowed to pass ${number} to select element.`);
        }
    }

    /*
     Click button New
     */
    newWrestler() {
        element(by.css("button[ng-click*='newWrestler()']")).click();
    }
}


module.exports = WrestlersPage;