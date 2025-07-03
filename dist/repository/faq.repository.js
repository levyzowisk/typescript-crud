"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqRepository = void 0;
const client_prisma_1 = require("../client.prisma");
class FaqRepository {
    constructor(prisma = new client_prisma_1.Prisma) {
        this.prisma = prisma;
    }
    createQuestion(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.prisma.connection()).faq.create({ data });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.prisma.connection()).faq.delete({ where: { id } });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.prisma.connection()).faq.findUnique({ where: { id } });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.prisma.connection()).faq.findMany();
        });
    }
}
exports.FaqRepository = FaqRepository;
