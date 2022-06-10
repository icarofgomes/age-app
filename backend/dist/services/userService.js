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
const userModel_1 = __importDefault(require("../models/userModel"));
const USER_CONNECTION_ERROR = new Error();
USER_CONNECTION_ERROR.message = '500-Server error';
const getAge = (birth) => {
    const today = new Date();
    const birthDate = new Date(birth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const mounth = today.getMonth() - birthDate.getMonth();
    if (mounth < 0 || (mounth === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield userModel_1.default.create(user);
    if (!newUser) {
        throw USER_CONNECTION_ERROR;
    }
    return newUser;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.default.getAll();
    if (!users) {
        throw USER_CONNECTION_ERROR;
    }
    const usersWithAge = users.map((user) => {
        const age = getAge(user.birth);
        return {
            username: user.username,
            age: age,
        };
    });
    return usersWithAge;
});
module.exports = {
    create,
    getAll,
};
