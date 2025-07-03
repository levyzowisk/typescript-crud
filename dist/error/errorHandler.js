"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
    sendErrorResponse(res) {
        console.log(this.message);
        res.status(this.statusCode).json({ message: this.message });
    }
}
exports.ErrorHandler = ErrorHandler;
