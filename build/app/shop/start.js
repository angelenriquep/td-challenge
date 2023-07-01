"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const port = process.env.PORT || '3000';
const server = new server_1.Server(port);
exports.default = server;
