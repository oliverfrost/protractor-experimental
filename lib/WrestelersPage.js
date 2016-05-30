let BasePage = require("./BasePage");
let SelectWrapper = require("./SelectWrapper");
let NumbersHelper = require("../helpers/NumbersHelper");


class WrestlersPage extends BasePage {
    get allRecordsOnThePage() {
        return element.all(by.xpath(".//table[@class='table table-striped table-hover']//tr"));
    }
    
    setAmountOfRecordsOnPage(number) {
        if (NumbersHelper.isInt(number)) {
            let amount = new SelectWrapper(by.model('perPage'));
            amount.selectByValue(number);

            // var e = element(by.id('xyz'));
            // browser.wait(EC.presenceOf(e), 10000);
            let EC = protractor.ExpectedConditions;
            switch(number) {
                case 50:
                    let element1 = element(by.xpath(".//table[@class='table table-striped table-hover']//tr[26]"));
                    browser.wait(EC.presenceOf(element1), 5000);
                    break;
                case 100:
                    let element2 = element(by.xpath(".//table[@class='table table-striped table-hover']//tr[51]"));
                    browser.wait(EC.presenceOf(element2), 5000);
                    break;
                default:
                    break;
            }



        } else {
            throw new Error(`[ERROR] It is not allowed to pass ${number} to select element.`);
        }
    }
    
}


module.exports = WrestlersPage;