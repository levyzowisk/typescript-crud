import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export class ErrorHandler extends Error {
    public statusCode: number

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }

    sendErrorResponse(res: Response) {
        res.status(this.statusCode).json(this.message);
    }
}