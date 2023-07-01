"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopCustomerEmail = void 0;
const StringValueObject_1 = require("../../../shared/domain/StringValueObject");
class ShopCustomerEmail extends StringValueObject_1.StringValueObject {
    constructor(value) {
        super(value);
        this.ensureIsValidEmail(value);
    }
    ensureIsValidEmail(value) {
        const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const isValidEmail = emailRegExp.test(value);
        if (!isValidEmail) {
            throw new Error(`The Customer email <${value}> is not a valid e-mail`);
        }
    }
}
exports.ShopCustomerEmail = ShopCustomerEmail;
