import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../error/errorHandler";

export class GlobalError {
    static handle(): ErrorRequestHandler {
        return (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
            if (err instanceof ErrorHandler) {
                err.sendErrorResponse(res);
                return;
            }
            
            res.status(500).json("Erro inesperado no servidor!");
        };
    }
    
}