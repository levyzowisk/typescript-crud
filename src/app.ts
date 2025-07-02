import express, { json, NextFunction, Router, Request, Response, ErrorRequestHandler } from "express";
import {Server} from 'http'
import  { Routes } from "./routes";
import { FaqController } from "./controller/faq.controller";
import { FaqRepository } from "./repository/faq.repository";
import { FaqService } from "./service/faq.service";
import { FaqRoute } from "./route/faq";
import { ErrorHandler } from "./error/errorHandler";
import { GlobalError } from "./middleware/globalError";

export class SetupApplication {
    private server?: Server;

    constructor(private port = 3000, public app = express()) {}

    public init(): void {
        this.setupRoutes();
        this.setupExpress();
    }

    private setupClasses () {

    }

    private setupRoutes(): void {
        const repo = new FaqRepository()
        const servi = new FaqService(repo)
        const controller = new FaqController(servi);
        const faqRoutes = new FaqRoute(controller);
        const routes = new Routes(faqRoutes);
        this.app.use(routes.define(Router()))
    }

    private setupExpress(): void {
        this.app.use(json())
        this.app.use(GlobalError.handle())
    }   

    public start(): void {
        this.server = this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
    
}