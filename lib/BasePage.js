let log4js = require('log4js');

class BasePage {
    constructor() {
        this.logger = log4js.getLogger();
    }
}

module.exports = BasePage;