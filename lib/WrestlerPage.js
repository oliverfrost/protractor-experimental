let BasePage = require("./BasePage");

class WrestlerPage extends BasePage {
    get lastNameField() {
        return $("input[placeholder='Last name']");
    }

    get firstNameField() {
        return $("input[placeholder='First name']");
    }

    get dateOfBirthField() {
        return $("input[placeholder='Date of Birth']");
    }

    get middleNameField() {
        return $("input[placeholder='Middle name']");
    }

    get regionSelect() {
        return $("fg-select[label='Region']");
    }

    get fstSelect() {
        return $("fg-select[label='FST']");
    }

    get styleSelect() {
        return $("fg-select[label='Style']");
    }

    get ageSelect() {
        return $("fg-select[label='Age']");
    }

    get yearSelect() {
        return $("fg-select[label='Year']");
    }

    get createButton() {
        return $("button.btn-success");
    }

    get deleteButton() {
        return $('[ng-click="delete()"]');
    }

    get photoDivHeader() {
        return element(by.xpath(".//div[text()='Photo']"));
    }

    get documentsDivHeader() {
        return element(by.xpath(".//div[text()='Documents']"));
    }

    /*
     'Так' button on modal window that appears after record removal was initialized.
     */
    get confirmRemovalButton() {
        return $('[ng-click="ok()"]');
    }

    /*
     'Hi' button on modal window that appears after record removal was initialized.
     */
    get cancelRemovalButton() {
        return $('[ng-click="cancel()"]');
    }

    /**
     * Gets content of 'firstNameField'
     *
     * @returns webdriver.promise.Promise.<string>
     */
    get firstName() {
        return this.firstNameField.getText();
    }

    /**
     * Gets content of 'middleNameField'
     *
     * @returns webdriver.promise.Promise.<string>
     */
    get middleName() {
        return this.middleNameField.getText();
    }

    /**
     * Gets content of 'lastNameField'
     *
     * @returns webdriver.promise.Promise.<string>
     */
    get lastName() {
        return this.lastNameField.getText();
    }

    /**
     * Gets content of 'dateOfBirthField'
     *
     * @returns webdriver.promise.Promise.<string>
     */
    get dateOfBirth() {
        return this.dateOfBirthField.getText();
    }

    /**
     * Gets currently selected option of 'regionSelect'
     *
     * @returns webdriver.promise.Promise.<string>
     */
    get region() {
        return this.regionSelect.$('option:checked').getText();
    }

    /**
     * Gets currently selected option of 'fstSelect'
     *
     * @returns webdriver.promise.Promise.<string>
     */
    get fst() {
        return this.fstSelect.$('option:checked').getText();
    }

    /**
     * Gets currently selected option of 'styleSelect'
     *
     * @returns webdriver.promise.Promise.<string>
     */
    get style() {
        return this.styleSelect.$('option:checked').getText();
    }

    /**
     * Gets currently selected option of 'ageSelect'
     *
     * @returns webdriver.promise.Promise.<string>
     */
    get age() {
        return this.ageSelect.$('option:checked').getText();
    }

    /**
     * Gets currently selected option of 'yearSelect'
     *
     * @returns webdriver.promise.Promise.<string>
     */
    get year() {
        return this.yearSelect.$('option:checked').getText();
    }

    typeLastName(name) {
        this.logger.debug(`Last name: ${name}`);
        this.lastNameField.clear().sendKeys(name);
    }

    typeFirstName(name) {
        this.logger.debug(`Name: ${name}`);
        this.firstNameField.clear().sendKeys(name);
    }

    typeDateOfBirth(date) {
        this.logger.debug(`Date of Birth: ${date}`);
        this.dateOfBirthField.clear().sendKeys(date);
    }

    typeMiddleName(name) {
        this.logger.debug(`Middle name: ${name}`);
        this.middleNameField.clear().sendKeys(name);
    }

    selectRegion(region) {
        this.logger.debug(`Region: ${region}`);
        this.regionSelect.all(by.css("option[label='" + region + "'")).first().click();
    }

    selectFst(fst) {
        this.logger.debug(`FST: ${fst}`);
        this.fstSelect.all(by.css("option[label='" + fst + "'")).first().click();
    }

    selectStyle(style) {
        this.logger.debug(`Style: ${style}`);
        this.styleSelect.all(by.css("option[label='" + style + "'")).first().click();
    }

    selectAge(age) {
        this.logger.debug(`Age: ${age}`);
        this.ageSelect.all(by.css("option[label='" + age + "'")).first().click();
    }

    selectYear(year) {
        this.logger.debug(`Year: ${year}`);
        this.yearSelect.all(by.css("option[label='" + year + "'")).first().click();
    }

    get isCreateButtonActive() {
        return this.createButton.isEnabled();
    }

    clickCreateButton() {
        this.createButton.click();
    }

    clickDeleteButton() {
        this.deleteButton.click();
    }

    confirmRecordRemoval() {
        this.confirmRemovalButton.click();
    }

    cancelRecordRemoval() {
        this.cancelRemovalButton.click();
    }

    fillInWrestler(lastName, firstName, middleName, year) {
        this.typeLastName(lastName);
        this.typeFirstName(firstName);
        this.typeDateOfBirth("07-10-1990");
        this.typeMiddleName(middleName);
        this.selectRegion("AR Krym");
        this.selectFst("Kolos");
        this.selectStyle("FS");
        this.selectAge("Cadet");
        this.selectYear(year);
    }
}

module.exports = new WrestlerPage();

