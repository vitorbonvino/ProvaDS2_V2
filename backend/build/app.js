"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//Rotas
const estado_router_1 = require("./router/estado.router");
const cidade_router_1 = require("./router/cidade.router");
const cliente_router_1 = require("./router/cliente.router");
const produto_router_1 = require("./router/produto.router");
const tabelapreco_router_1 = require("./router/tabelapreco.router");
const vendedor_router_1 = require("./router/vendedor.router");
const pedido_router_1 = require("./router/pedido.router");
const filme_router_1 = require("./router/filme.router");
const genero_router_1 = require("./router/genero.router");
class App {
    constructor() {
        this.express = express();
        this.middleware();
    }
    //Carrega os middleware da aplicação
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(cors());
    }
    startRoutes(socketIO) {
        //Rota padrão: é invocada antes da rotas original
        this.express.use((req, res, next) => {
            req.io = socketIO;
            next();
        });
        this.express.use('/estados', estado_router_1.default);
        this.express.use('/cidades', cidade_router_1.default);
        this.express.use('/clientes', cliente_router_1.default);
        this.express.use('/produtos', produto_router_1.default);
        this.express.use('/tabelaprecos', tabelapreco_router_1.default);
        this.express.use('/vendedores', vendedor_router_1.default);
        this.express.use('/pedidos', pedido_router_1.default);
        this.express.use('/filmes', filme_router_1.default);
        this.express.use('/generos', genero_router_1.default);
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map