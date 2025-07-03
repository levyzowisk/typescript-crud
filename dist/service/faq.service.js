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
exports.FaqService = void 0;
const class_transformer_1 = require("class-transformer");
const create_faq_dto_1 = require("../dto/create-faq.dto");
const errorHandler_1 = require("../error/errorHandler");
const class_validator_1 = require("class-validator");
class FaqService {
    constructor(faqRepository) {
        this.faqRepository = faqRepository;
    }
    createQuestion(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const dto = (0, class_transformer_1.plainToInstance)(create_faq_dto_1.CreateUserDto, data);
            console.log(dto);
            // Como esse erro está sendo tratado ?
            yield (0, class_validator_1.validateOrReject)(dto).catch((error) => {
                throw new errorHandler_1.ErrorHandler("Corpo Json inválido", 400);
            });
            // if(!Object.is(dto, CreateUserDto)) throw new ErrorHandler("Dados ausente", 400);
            return yield this.faqRepository.createQuestion(data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.faqRepository.findById(id)))
                throw new errorHandler_1.ErrorHandler("Dado não encontrado", 404);
            return yield this.faqRepository.delete(id);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.faqRepository.findAll();
        });
    }
}
exports.FaqService = FaqService;
