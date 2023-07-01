"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const glob_1 = __importDefault(require("glob"));
/**
 * Uses a match patter reg exp to register and return all the routes in the
 * current directory
 *
 * @param router
 */
function registerRoutes(router) {
    const routes = glob_1.default.sync(__dirname + '/**/*.route.*');
    routes.map(route => register(route, router));
}
exports.registerRoutes = registerRoutes;
function register(routePath, app) {
    const route = require(routePath);
    route.register(app);
}
