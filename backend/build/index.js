"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const http = require("http");
const socketIO = require("socket.io");
const app_1 = require("./app");
typeorm_1.createConnection().then(connection => {
    const server = http.createServer(app_1.default.express);
    const io = socketIO(server);
    //Listner de conexão ao soscket
    io.on('connect', (socket) => {
        console.log('Cliente conectado...');
    });
    app_1.default.startRoutes(io);
    server.listen(3000, () => {
        console.log('Applicação está rodando na porta 3000');
    });
}).catch(error => {
    console.log('TypeORM dont connected: %s', error);
});
//# sourceMappingURL=index.js.map