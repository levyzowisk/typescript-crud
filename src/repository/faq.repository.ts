import { Prisma } from "../client.prisma";
import { CreateUserDto } from "../dto/create-faq.dto";
export class FaqRepository {
    constructor(private readonly prisma = new Prisma) {}

    async create (data: CreateUserDto) {
        return (await this.prisma.connection()).faq.create({data});
    }
}