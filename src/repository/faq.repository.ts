import { Prisma } from "../client.prisma";
import { CreateUserDto } from "../dto/create-faq.dto";
export class FaqRepository {
    constructor(private readonly prisma = new Prisma) {}

    async createQuestion(data: CreateUserDto) {
        return (await this.prisma.connection()).faq.create({data});
    }

    async delete(id: string) {
        return (await this.prisma.connection()).faq.delete({where: {id}});
    }

    async findById(id: string) {
        return (await this.prisma.connection()).faq.findUnique({where: {id}})
    }

    async findAll() {
        return (await this.prisma.connection()).faq.findMany();
    }
}