import { PrismaClient } from "@prisma/client";

export class Prisma {
    private prisma = new PrismaClient()

    async connection () {
        return this.prisma
   }
}