"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const CustomerController_1 = __importDefault(require("../controllers/CustomerController"));
const controller = new CustomerController_1.default();
const register = (app) => {
    app.get('/v1/customers');
    app.post('/v1/customer/:id', controller.createRecord);
    app.post('/v1/customers/:id');
    app.patch('/v1/customer/:id');
    app.delete('/v1/customer/:id');
};
exports.register = register;
