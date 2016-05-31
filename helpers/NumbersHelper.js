let Helperbase = require("./HelperBase");

class NumbersHelper extends Helperbase {

    isInt(value) {
        return !isNaN(value) &&
            parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
    }

    isFloat(value) {
        return Number(value) === value && value % 1 !== 0;
    }
}

module.exports = new NumbersHelper;