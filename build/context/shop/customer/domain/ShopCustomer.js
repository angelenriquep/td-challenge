"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopCustomer = void 0;
const AggregateRoot_1 = require("../../../shared/domain/AggregateRoot");
const ShopCustomerCreatedDate_1 = require("./ShopCustomerCreatedDate");
const ShopCustomerId_1 = require("./ShopCustomerId");
const ShopCustomerName_1 = require("./ShopCustomerName");
const ShopCustomerEmail_1 = require("./ShopCustomerEmail");
class ShopCustomer extends AggregateRoot_1.AggregateRoot {
    constructor(id, name, email) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdDate = new ShopCustomerCreatedDate_1.ShopCustomerCreatedDate();
    }
    static create(id, name, email) {
        const customer = new ShopCustomer(id, name, email);
        return customer;
    }
    // :Remember created date is ijected automatically
    static fromPrimitives(plainData) {
        return new ShopCustomer(new ShopCustomerId_1.ShopCustomerId(), new ShopCustomerName_1.ShopCustomerName(plainData.name), new ShopCustomerEmail_1.ShopCustomerEmail(plainData.email));
    }
    toPrimitives() {
        return {
            name: this.name.value,
            email: this.email.value,
            createdDate: this.createdDate.value
        };
    }
}
exports.ShopCustomer = ShopCustomer;
