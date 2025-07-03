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
    create() {
        this.router.post('/', this.faqController.createQuestion.bind(this.faqController));
        this.router.delete('/:id', this.faqController.delete.bind(this.faqController));
        this.router.get('/', this.faqController.findAll.bind(this.faqController));
    }
    getRoutes() {
        return this.router;
    }
}
exports.FaqRoute = FaqRoute;
