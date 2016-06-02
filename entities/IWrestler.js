var Chance = require('chance');

class IWrestler {
    constructor(firstName, lastName, middle, year) {
        var chance = new Chance();
        this.firstName = chance.last();
        this.lastName = chance.last();
        this.middle = chance.last();
        this.year = chance.year({min: 2013, max: 2017});
    }
}

module.exports = new IWrestler();