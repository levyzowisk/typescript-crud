"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
class Server {
    static start() {
        const application = new app_1.SetupApplication(3000);
        application.init();
        application.start();
    }
}
Server.start();
