"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopCustomerCreatedDate = void 0;
class ShopCustomerCreatedDate {
    constructor() {
        this.value = new Date();
    }
    toString() {
        return this.value.toISOString();
    }
}
exports.ShopCustomerCreatedDate = ShopCustomerCreatedDate;
