import { plainToInstance } from "class-transformer";
import { CreateUserDto } from "../dto/create-faq.dto";
import { ErrorHandler } from "../error/errorHandler";
import { FaqRepository } from "../repository/faq.repository";
import { validateOrReject } from "class-validator";

export class FaqService {
    constructor(private readonly faqRepository: FaqRepository) {}

    async createQuestion(data: CreateUserDto) {
        const dto = plainToInstance(CreateUserDto, data);
        console.log(dto);
        
        // Como esse erro está sendo tratado ?
        await validateOrReject(dto).catch((error) => {
            throw new ErrorHandler("Corpo Json inválido", 400);
        });

        // if(!Object.is(dto, CreateUserDto)) throw new ErrorHandler("Dados ausente", 400);
        return await this.faqRepository.createQuestion(data);
    }

    async delete(id: string) {
        if(!await this.faqRepository.findById(id)) throw new ErrorHandler("Dado não encontrado", 404);
        
        return await this.faqRepository.delete(id);
    }

    async findAll() {
        return await this.faqRepository.findAll();
    }

}