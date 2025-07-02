import { Router } from "express";
import { FaqRoute} from "./route/faq";
// import  FaqController from "./controller/faq/faq.controller";

export class Routes {
    constructor(private readonly faqRoutes: FaqRoute) {}
    
     define(router: Router) {
         router.use('/faq', this.faqRoutes.getRoutes())
         return router
    }
}

// export default Routes.define(Router())