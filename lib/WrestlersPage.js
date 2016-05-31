let BasePage = require("./BasePage");
let NumbersHelper = require("../helpers/NumbersHelper");


class WrestlersPage extends BasePage {
    /* Get the list of all wrestlers on the page
     * @return array of table rows with names
     */
    get allRecordsOnThePage() {
        return element.all(by.xpath(".//table[@class='table table-striped table-hover']//tr"));
    }

    get searchField() {
        return element(by.model("searchFor"));
    }

    get searchButton() {
        return element(by.css('[ng-click="searchWrestler(searchFor)"]'));
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


    /**
     * Finds row with specified id and returns it.
     *
     * @param id visible on the page wrestler`s id.
     * @returns element, table row with wrestler`s info
     */
    getRowById(id) {
        console.log(`[DEBUG] Looking for row with ID: ${id}`);
        return element(by.xpath(".//table//tr/td[text()='" + id + "']/.."));
    }


    /**
     * Finds a row by index and returns wrestler`s ID (first cell)
     *
     * @param num number of a row (1-25, 1-50, 1-100)
     * @returns promise that will be resolved when text is visible
     */
    getRecordIdByIndex(num) {
        return element(by.xpath(".//table[@class='table table-striped table-hover']//tr[" + num + "]/td[1]")).getText();
    }


    /**
     * Initiate search by ID on the WrestlersPage.
     *
     * @param id wrestler`s ID
     */
    searchForRecord(id) {
        console.log(`[DEBUG] Searching for wrestler with ID: ${id} `);
        this.searchField.sendKeys(id);
        this.searchButton.click();
    }
}


module.exports = WrestlersPage;