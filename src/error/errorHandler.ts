import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export class ErrorHandler extends Error {
    public statusCode: number

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }

    sendErrorResponse(res: Response) {
        console.log(this.message);
        
        res.status(this.statusCode).json({message: this.message});
    }
}