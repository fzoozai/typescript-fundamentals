// Interfaces
var printCryptoDetails = function (_a) {
    var name = _a.name, abbreviation = _a.abbreviation, price = _a.price;
    console.log({ name: name, price: price });
    return { name: name, price: price };
};
printCryptoDetails({ name: "Binance Coin", abbreviation: "BNB", price: 240 });
// Enums used for example: if you need a list of exact items
// numeric enums
var CarTypeNums;
(function (CarTypeNums) {
    CarTypeNums[CarTypeNums["ELECTRIC"] = 0] = "ELECTRIC";
    CarTypeNums[CarTypeNums["HYBRID"] = 1] = "HYBRID";
    CarTypeNums[CarTypeNums["PETROL"] = 2] = "PETROL";
})(CarTypeNums || (CarTypeNums = {}));
// string enums
var CarType;
(function (CarType) {
    CarType["ELECTRIC"] = "ELECTRIC";
    CarType["HYBRID"] = "HYBRID";
    CarType["PETROL"] = "PETROL";
})(CarType || (CarType = {}));
var createCarType = function (carType) { };
createCarType(CarType.ELECTRIC);
console.log(CarType.ELECTRIC);
// Classes
var Currency = /** @class */ (function () {
    function Currency(price) {
        this.price = price;
    }
    Currency.prototype.printValue = function () {
        console.log(this.price);
        return this.price;
    };
    return Currency;
}());
var binance = new Currency(241);
binance.printValue();
