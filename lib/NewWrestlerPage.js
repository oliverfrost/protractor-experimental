let BasePage = require("./BasePage");

class NewWrastlerPage extends BasePage {
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

    get selectRegion() {
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
        this.selectRegion.all(by.css("option[label='" + region + "'")).first().click();
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