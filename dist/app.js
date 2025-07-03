"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupApplication = void 0;
const express_1 = __importStar(require("express"));
const routes_1 = require("./routes");
const faq_controller_1 = require("./controller/faq.controller");
const faq_repository_1 = require("./repository/faq.repository");
const faq_service_1 = require("./service/faq.service");
const faq_1 = require("./route/faq");
const globalError_1 = require("./middleware/globalError");
class SetupApplication {
    constructor(port = 3000, app = (0, express_1.default)()) {
        this.port = port;
        this.app = app;
    }
    init() {
        this.setupExpress();
        this.setupRoutes();
    }
    setupClasses() {
    }
    setupRoutes() {
        const repo = new faq_repository_1.FaqRepository();
        const servi = new faq_service_1.FaqService(repo);
        const controller = new faq_controller_1.FaqController(servi);
        const faqRoutes = new faq_1.FaqRoute(controller);
        const routes = new routes_1.Routes(faqRoutes);
        this.app.use(routes.define((0, express_1.Router)()));
    }
    setupExpress() {
        this.app.use(express_1.default.json());
        this.app.use(globalError_1.GlobalError.handle());
    }
    start() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.SetupApplication = SetupApplication;
