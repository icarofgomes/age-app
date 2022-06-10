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
const connection_1 = __importDefault(require("./connection"));
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, birth } = user;
    try {
        const [result] = yield connection_1.default.execute('INSERT INTO users(username, birth) VALUES (?, ?)', [username, birth]);
        const { insertId: id } = result;
        const insertedUser = { id, username, birth };
        return insertedUser;
    }
    catch (e) {
        return null;
    }
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [data] = yield connection_1.default.execute('SELECT * FROM users');
        return data;
    }
    catch (e) {
        return null;
    }
});
module.exports = {
    create,
    getAll,
};
