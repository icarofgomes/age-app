"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.default = (err, _req, res, next) => {
    if (!joi_1.default.isError(err))
        return next(err);
    const [code, message] = err.message.split('-');
    return res.status(Number(code)).json({ error: message });
};
