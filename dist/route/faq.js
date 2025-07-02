"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqRoute = void 0;
const express_1 = require("express");
class FaqRoute {
    constructor(faqController) {
        this.faqController = faqController;
        this.router = (0, express_1.Router)();
        // this.setupRoutes();
        this.create();
    }
    // private setupRoutes() {
    //     this.router.post('/', this.faqController.create.bind(this.faqController))
    // }
    create() {
        this.router.post('/', this.faqController.create.bind(this.faqController));
    }
    getRoutes() {
        return this.router;
    }
}
exports.FaqRoute = FaqRoute;
