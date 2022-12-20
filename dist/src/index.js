"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("../config/db");
const cors_1 = __importDefault(require("cors"));
const todoRouter_1 = __importDefault(require("../router/todoRouter"));
const port = process.env.port || 2056;
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.use("/todoapp", todoRouter_1.default);
server.get("/", (req, res) => {
    return res.status(200).json({
        message: "server is up and running",
    });
});
server.listen(port, () => {
    console.log(`server is up and running on port : ${port} `);
});
