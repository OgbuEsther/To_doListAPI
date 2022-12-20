"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.oneGet = exports.postTasks = exports.removeOne = exports.getAll = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
//general get method
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTasks = yield todoModel_1.default.find();
        return res.status(200).json({
            message: "all data gotten",
            data: allTasks,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "an error occurred while trying to get all tasks",
            dat: error,
        });
    }
});
exports.getAll = getAll;
//single get
const oneGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const one = yield todoModel_1.default.findById(req.params.id);
        return res.status(200).json({
            message: "single task gotten",
            data: one,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "an error occurred while trying to get all tasks",
            data: error,
        });
    }
});
exports.oneGet = oneGet;
//post method
const postTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, status, desc } = req.body;
        const newBook = yield todoModel_1.default.create({
            title,
            status,
            desc,
        });
        return res.status(201).json({
            message: "new task added",
            data: newBook,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "an error occurred while trying to post new tasks",
            data: error,
        });
    }
});
exports.postTasks = postTasks;
//delete method
const removeOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removeTasks = yield todoModel_1.default.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            message: "deleted successfully",
            data: removeTasks,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "an error occurred while trying to get all tasks",
            data: error,
        });
    }
});
exports.removeOne = removeOne;
//update method
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, status, desc } = req.body;
        const updates = yield todoModel_1.default.findByIdAndUpdate(req.params.id, {
            title,
            status,
            desc,
        }, {
            new: true,
        });
        return res.status(200).json({
            message: "tasks has been updated",
            data: updates,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "an error occurred while trying to get all tasks",
            data: error,
        });
    }
});
exports.update = update;
