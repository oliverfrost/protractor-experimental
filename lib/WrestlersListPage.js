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
        return $('[ng-click="searchWrestler(searchFor)"]');
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


    getRowByIndex(index) {
        console.log(`[DEBUG] Looking ${index} row.`);
        return $(".table-striped tr:nth-child(" + index + ")");
    }


    /**
     * Finds a row by index and returns wrestler`s ID (first cell)
     *
     * @param num number of a row (1-25, 1-50, 1-100)
     * @returns promise that will be resolved when text is visible
     */
    getRecordIdByIndex(num) {
        //return element(by.xpath(".//table[@class='table table-striped table-hover']//tr[" + num + "]/td[1]")).getText();
        return $(".table-striped tr:nth-child(" + num + ") td:nth-child(1)").getText();
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


    get tabs() {
        return $$(".nav-tabs li");
    }


    /**
     * Closes the tab by index. If no index specified closes 2nd tab.
     *
     * @param index number of the tab. Starts with 0.
     */
    closeTab(index) {
        if (index) {
            $$(".close-it ico").get(index).click();
        } else {
            $$(".close-it ico").get(1).click();
        }
    }


    newWrestler() {
        $("button[ng-click*='newWrestler()']").click();
    }

    getRandomId() {
        return element.all(by.xpath(".//table[@class='table table-striped table-hover']//tr"))
            .then(function (rows) {
                let row = rows[Math.floor(Math.random() * rows.length)];
                return row.all(by.css("td")).first();
            })
            .then(function (row) {
                return row.getText();
            })
            .then(function (id) {
                console.log(`[DEBUG] Editing wrestler with ID: ${id}`);
                return id;
            });
    }

    /**
     * Closes the tab by index. If no index specified closes 2nd tab.
     *
     * @param index number of the tab. Starts with 0.
     */
    closeTab(index) {
        if (index) {
            $$(".close-it ico").get(index).click();
        } else {
            $$(".close-it ico").get(1).click();
        }
    }
    
    fetchActiveTabText() {
        return $$("li.ng-isolate-scope.active").first().getText()
            .then(function (text) {
                console.log(`[DEBUG] Tab text: ${text}`)
                return text;
            });
    }
}

module.exports = new WrestlersPage();
