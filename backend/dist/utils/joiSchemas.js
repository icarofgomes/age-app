"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const joi_1 = __importDefault(require("joi"));
exports.user = joi_1.default.object({
    username: joi_1.default.string().min(2).required().messages({
        'string.base': '422-Username must be a string',
        'any.required': '400-Username is required',
    }),
    birth: joi_1.default.date().required().messages({
        'any.required': '400-Birth is required',
    }),
});
