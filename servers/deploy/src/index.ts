import express from 'express';

class DeploymentServer {
    private readonly PORT: string = '8001'; // TODO: Create some kind of port number issuing authority
    private readonly express: express.Express;

    constructor() {
        this.express = express();
        this.routes();
    }

    private routes() {
        this.express.post('/development/did-push', (request, response) => {
            console.log('Someone pushed new code! We should probably, errrmm.. Do something.');
        });
    }
}


function main() {

}


main();