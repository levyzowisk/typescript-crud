import { Request, Response } from "express";
import { FaqService } from "../service/faq.service";
import { CreateUserDto } from "../dto/create-faq.dto";

export class FaqController {

    constructor(private readonly faqService: FaqService) {}

    async create(req: Request<any, any, CreateUserDto>, res: Response) {
        await this.faqService.create(req.body);
        res.status(201).json();
    }
}
