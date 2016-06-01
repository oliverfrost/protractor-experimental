let BasePage = require("./BasePage");

class LoginPage extends BasePage {
    get loginField() {
        return element(by.xpath(".//input[@placeholder='Login']"));
    }


    get passwordField() {
        return element(by.xpath(".//input[@placeholder='Password']"));
    }


    get submitButton() {
        return element(by.xpath(".//button"));
    }
    
    
    get incorrectCredentialsWarning() {
        return element(by.xpath(".//div[text()='Incorrect credentials']"));
    }

    open() {
        browser.get('http://streamtv.net.ua/base/');
    }

    typeLogin(username) {
        this.loginField.sendKeys(username);
    }


    typePassword(password) {
        this.passwordField.sendKeys(password);
    }


    clickSubmitButton() {
        this.submitButton.click();
    }
}

module.exports = new LoginPage();