"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalError = void 0;
const errorHandler_1 = require("../error/errorHandler");
class GlobalError {
    static handle() {
        return (err, req, res, next) => {
            if (err instanceof errorHandler_1.ErrorHandler) {
                err.sendErrorResponse(res);
                return;
            }
            res.status(500).json("Erro inesperado no servidor!");
        };
    }
}
exports.GlobalError = GlobalError;
