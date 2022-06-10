"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, _req, res, _next) => {
    const [code, message] = err.message.split('-');
    return res.status(Number(code)).json({ error: message });
};
