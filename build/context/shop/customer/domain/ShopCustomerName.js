"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopCustomerName = void 0;
const StringValueObject_1 = require("../../../shared/domain/StringValueObject");
class ShopCustomerName extends StringValueObject_1.StringValueObject {
    constructor(value) {
        super(value);
        this.ensureLengthIsLessThan30Characters(value);
    }
    ensureLengthIsLessThan30Characters(value) {
        if (value.length > 30) {
            throw new Error(`The Customer name <${value}> has more than 30 characters`);
        }
    }
}
exports.ShopCustomerName = ShopCustomerName;
