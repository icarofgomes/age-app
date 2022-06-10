"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const middlerares_1 = require("./middlerares");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use('/users', routes_1.userRouter);
app.use(middlerares_1.joiError);
app.use(middlerares_1.domainError);
app.use(middlerares_1.serverError);
exports.default = app;
