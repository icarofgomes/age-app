"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (schema) => (req, _res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        throw error;
    }
    next();
};
