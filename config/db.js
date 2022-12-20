"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const localURL = "mongodb://0.0.0.0:27017/TODOAPI";
mongoose_1.default.connect(localURL);
mongoose_1.default.connection
    .on("open", () => {
    console.log(`database connected`);
})
    .once("error", () => {
    console.log(`failed to connect`);
});
