
import { Router, request, response } from 'express';
import {FaqController} from '../controller/faq.controller';

export class FaqRoute {
    private router = Router()

    constructor(private readonly faqController: FaqController) {
        // this.setupRoutes();
        this.create();
    }

    create() {
        this.router.post('/', this.faqController.create.bind(this.faqController));
    }

    getRoutes() {
        return this.router;
    }

}

