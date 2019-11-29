import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

//Rotas
import estadoRouter from './router/estado.router';
import cidadeRouter from './router/cidade.router';
import clienteRouter from './router/cliente.router';
import produtoRouter from './router/produto.router';
import tabelaPrecoRouter from './router/tabelapreco.router';
import vendedorRouter from './router/vendedor.router';
import pedidoRouter from './router/pedido.router';

import filmeRouter from './router/filme.router';
import generoRouter from './router/genero.router';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
    }

    //Carrega os middleware da aplicação
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(cors());
    }

    public startRoutes(socketIO): void {
        //Rota padrão: é invocada antes da rotas original
        this.express.use((req, res, next) => {

            req.io = socketIO;

            next();
        });

        this.express.use('/estados', estadoRouter);
        this.express.use('/cidades', cidadeRouter);
        this.express.use('/clientes', clienteRouter);
        this.express.use('/produtos', produtoRouter);
        this.express.use('/tabelaprecos', tabelaPrecoRouter);
        this.express.use('/vendedores', vendedorRouter);
        this.express.use('/pedidos', pedidoRouter);

        this.express.use('/filmes', filmeRouter);
        this.express.use('/generos', generoRouter);
    }
}

export default new App();