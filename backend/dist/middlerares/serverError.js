"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, _req, res, _next) => {
    return res.status(500).json({
        message: 'Internal server error',
    });
};
