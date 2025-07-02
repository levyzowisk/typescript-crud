import { CreateUserDto } from "../dto/create-faq.dto";
import { ErrorHandler } from "../error/errorHandler";
import { FaqRepository } from "../repository/faq.repository";

export class FaqService {
    constructor(private readonly faqRepository: FaqRepository) {}
    async create (data: CreateUserDto) {
        if(!data) throw new ErrorHandler("Dado ausente", 400)
        return await this.faqRepository.create(data)
    }

}