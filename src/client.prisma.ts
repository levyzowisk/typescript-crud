import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
export class Prisma {
    private prisma = new PrismaClient()

    async connection () {
        return this.prisma
   }
}