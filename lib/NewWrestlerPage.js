let BasePage = require("./BasePage");

class NewWrestlerPage extends BasePage {
    get lastName() {
        return element(by.css("input[placeholder='Last name']"));
    }


    get firstName() {
        return element(by.css("input[placeholder='First name']"));
    }


    get dateOfBirth() {
        return element(by.css("input[placeholder='Date of Birth']"));
    }


    get middleName() {
        return element(by.css("input[placeholder='Middle name']"));
    }


    get region() {
        return element(by.css("fg-select[label='Region']"));
    }


    get fst() {
        return element(by.css("fg-select[label='FST']"));
    }


    get style() {
        return element(by.css("fg-select[label='Style']"));
    }


    get age() {
        return element(by.css("fg-select[label='Age']"));
    }


    get year() {
        return element(by.css("fg-select[label='Year']"));
    }


    get createButton() {
        return element(by.css("button.btn-success"));
    }


    get deleteButton() {
        return element(by.css('[ng-click="delete()"]'));
    }


    /*
     'Так' button on modal window that appears after record removal was initialized.
     */
    get confirmRemovalButton() {
        return element(by.css('[ng-click="ok()"]'));
    }


    /*
     'Hi' button on modal window that appears after record removal was initialized.
     */
    get cancelRemovalButton() {
        return element(by.css('[ng-click="cancel()"]'));
    }


    typeLastName(name) {
        this.lastName.sendKeys(name);
    }


    typeFirstName(name) {
        this.firstName.sendKeys(name);
    }


    typeDateOfBirth(date) {
        this.dateOfBirth.sendKeys(date);
    }


    typeMiddleName(name) {
        this.middleName.sendKeys(name);
    }


    selectRegion(region) {
        this.region.all(by.css("option[label='" + region + "'")).first().click();
    }


    selectFst(fst) {
        this.fst.all(by.css("option[label='" + fst + "'")).first().click();
    }


    selectStyle(style) {
        this.style.all(by.css("option[label='" + style + "'")).first().click();
    }

    selectAge(age) {
        this.age.all(by.css("option[label='" + age + "'")).first().click();
    }


    selectYear(year) {
        this.year.all(by.css("option[label='" + year + "'")).first().click();
    }


    isCreateButtonClickable() {
        this.createButton.isEnabled();
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

    /**
     * Closes the tab by index. If no index specified closes 2nd tab.
     *
     * @param index number of the tab. Starts with 0.
     */
    closeTab(index) {
        if (index) {
            element.all(by.css(".close-it ico")).get(index).click();
        } else {
            element.all(by.css(".close-it ico")).get(1).click();
        }
    }
}

module.exports = NewWrestlerPage;

