import express from 'express';

class DeploymentServer {
    private readonly PORT: string = '8001'; // TODO: Create some kind of port number issuing authority
    private readonly express: express.Express;

    constructor() {
        this.express = express();
        this.routes();
    }

    private routes() {
        this.express.use((request, response) => {
            console.log(request.originalUrl);
        });

        this.express.post('/development/did-push', (request, response) => {
            console.log('Someone pushed new code! We should probably, errrmm.. Do something.');
            response.sendStatus(200);
        });
    }

    public run() {
        this.express.listen(this.PORT);
    }
}


function main() {
    new DeploymentServer().run();
}


main();