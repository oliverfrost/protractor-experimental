let BasePage = require("./BasePage");

class WrestlerPage extends BasePage {
    get lastName() {
        return $("input[placeholder='Last name']");
    }

    get firstName() {
        return $("input[placeholder='First name']");
    }

    get dateOfBirth() {
        return $("input[placeholder='Date of Birth']");
    }

    get middleName() {
        return $("input[placeholder='Middle name']");
    }

    get region() {
        return $("fg-select[label='Region']");
    }

    get fst() {
        return $("fg-select[label='FST']");
    }

    get style() {
        return $("fg-select[label='Style']");
    }

    get age() {
        return $("fg-select[label='Age']");
    }

    get year() {
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


    typeLastName(name) {
        this.lastName.clear().sendKeys(name);
    }

    typeFirstName(name) {
        this.firstName.clear().sendKeys(name);
    }

    typeDateOfBirth(date) {
        this.dateOfBirth.clear().sendKeys(date);
    }

    typeMiddleName(name) {
        this.middleName.clear().sendKeys(name);
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
}

module.exports = new WrestlerPage();

