var BasePage = require("./BasePage");

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
    
    typeLastName(name) {
       return this.lastName.sendKeys(name);
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
}

module.exports = NewWrestlerPage;
