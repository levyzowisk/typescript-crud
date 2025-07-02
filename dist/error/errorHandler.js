"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
    sendErrorResponse(res) {
        res.status(this.statusCode).json(this.message);
    }
}
exports.ErrorHandler = ErrorHandler;
