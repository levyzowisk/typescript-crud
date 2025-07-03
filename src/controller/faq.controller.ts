import { NextFunction, Request, Response } from "express";
import { FaqService } from "../service/faq.service";
import { CreateUserDto } from "../dto/create-faq.dto";

export class FaqController {

    constructor(private readonly faqService: FaqService) {}

    async createQuestion(req: Request<any, any, CreateUserDto>, res: Response) {
        await this.faqService.createQuestion(req.body);
        
        res.status(201).json();
        return
    }


    async delete(req: Request<{id: string}>, res: Response, next: NextFunction) {
        await this.faqService.delete(req.params.id);

        res.status(200).json('Usuário deletado com sucesso!');
        return
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        const data = await this.faqService.findAll();

        res.status(200).json(data)
    }
}
