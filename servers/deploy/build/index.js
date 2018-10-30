"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class DeploymentServer {
    constructor() {
        this.PORT = '8001'; // TODO: Create some kind of port number issuing authority
        this.express = express_1.default();
        this.routes();
    }
    routes() {
        this.express.post('/development/did-push', (request, response) => {
            console.log('Someone pushed new code! We should probably, errrmm.. Do something.');
            response.sendStatus(200);
        });
    }
    run() {
        this.express.listen(this.PORT);
    }
}
function main() {
    new DeploymentServer().run();
}
main();
