"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
// import  FaqController from "./controller/faq/faq.controller";
class Routes {
    constructor(faqRoutes) {
        this.faqRoutes = faqRoutes;
    }
    define(router) {
        router.use('/faq', this.faqRoutes.getRoutes());
        return router;
    }
}
exports.Routes = Routes;
// export default Routes.define(Router())
