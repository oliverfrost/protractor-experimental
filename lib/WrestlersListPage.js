let BasePage = require("./BasePage"),
    NumbersHelper = require("../helpers/NumbersHelper");


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

    get regionSelect() {
        return element(by.model("filters.fregion"));
    }

    get fstSelect() {
        return element(by.model("filters.ffst"));
    }

    get licenseYearSelect() {
        return element(by.model("filters.fyear"));
    }

    get photoSelect() {
        return element(by.model("filters.fphoto"));
    }

    get styleSelect() {
        return element(by.model("filters.fstyle"));
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

    setRegionFilter(region) {
        element(by.cssContainingText('option', region)).click();
    }

    setFstFilter(fst) {
        element(by.cssContainingText('option', fst)).click();
    }

    setLinceYearFilter(year) {
        element(by.cssContainingText('option', year)).click();
    }

    getRowByIndex(index) {
        this.logger.debug(`Looking ${index} row.`);
        return $(".table-striped tr:nth-child(" + index + ")");
    }

    /**
     * Finds row with specified id and returns it.
     *
     * @param id visible on the page wrestler`s id.
     * @returns element, table row with wrestler`s info
     */
    getRowById(id) {
        this.logger.debug(`Looking for row with ID: ${id}`);
        return element(by.xpath(".//table//tr/td[text()='" + id + "']/.."));
    }

    /**
     * Gets content of '№' column in specified row
     *
     * @param num number of a row. Can be between 1-25, 1-50, 1-100
     * @returns webdriver.promise.Promise.<string>
     */
    getRecordIdByRowIndex(num) {
        this.logger.debug(`Looking for ${num} row.`);
        return $(".table-striped tr:nth-child(" + num + ") td:nth-child(1)").getText();
    }

    /**
     * Gets content of 'FIO' column in specified row
     *
     * @param num number of a row. Can be between 1-25, 1-50, 1-100
     * @returns webdriver.promise.Promise.<string>
     */
    getFullNameByRowIndex(num) {
        return $(".table-striped tr:nth-child(" + num + ") td:nth-child(2)").getText();
    }

    /**
     * Gets content of 'region' column in specified row
     *
     * @param num number of a row. Can be between 1-25, 1-50, 1-100
     * @returns webdriver.promise.Promise.<string>
     */
    getRegionByRowIndex(num) {
        return $(".table-striped tr:nth-child(" + num + ") td:nth-child(3)").getText();
    }

    /**
     * Gets content of 'FST' column in specified row
     *
     * @param num number of a row. Can be between 1-25, 1-50, 1-100
     * @returns webdriver.promise.Promise.<string>
     */
    getFSTByRowIndex(num) {
        return $(".table-striped tr:nth-child(" + num + ") td:nth-child(4)").getText();
    }

    /**
     * Gets content of 'license' column in specified row
     *
     * @param num number of a row. Can be between 1-25, 1-50, 1-100
     * @returns webdriver.promise.Promise.<string>
     */
    getLicenseByRowIndex(num) {
        return $(".table-striped tr:nth-child(" + num + ") td:nth-child(5)").getText();
    }

    /**
     * Gets content of 'photo' column in specified row
     *
     * @param num number of a row. Can be between 1-25, 1-50, 1-100
     * @returns webdriver.promise.Promise.<string>
     */
    getPhotoByRowIndex(num) {
        return $(".table-striped tr:nth-child(" + num + ") td:nth-child(6)").getText();
    }

    /**
     * Gets content of 'style' column in specified row
     *
     * @param num number of a row. Can be between 1-25, 1-50, 1-100
     * @returns webdriver.promise.Promise.<string>
     */
    getStyleByRowIndex(num) {
        return $(".table-striped tr:nth-child(" + num + ") td:nth-child(7)").getText();
    }

    /**
     * Gets content of 'changed' column in specified row
     *
     * @param num number of a row. Can be between 1-25, 1-50, 1-100
     * @returns webdriver.promise.Promise.<string>
     */
    getChangedByRowIndex(num) {
        return $(".table-striped tr:nth-child(" + num + ") td:nth-child(8   )").getText();
    }

    /**
     * Initiate search by ID on the WrestlersPage.
     *
     * @param id wrestler`s ID
     */
    searchForRecord(id) {
        this.logger.debug(`Searching for wrestler with ID: ${id} `);
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
            this.logger.info("Closing ${index} tab.");
            $$(".close-it ico").get(index).click();
        } else {
            this.logger.info("Index was npot specified. Closing 2nd tab.");
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
                this.logger.debug(`Editing wrestler with ID: ${id}`);
                return id;
            }.bind(this));
    }

    fetchActiveTabText() {
        return $$("li.ng-isolate-scope.active").first().getText()
            .then(function (text) {
                this.logger.debug(`Tab text: ${text}`);
                return text;
            }.bind(this));
    }
}

module.exports = new WrestlersPage();
