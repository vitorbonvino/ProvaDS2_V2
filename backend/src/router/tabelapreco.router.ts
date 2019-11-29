import { Router } from 'express';
import  tabelaPrecoController  from '../controller/tabelapreco.controller';

class TabelaPrecoRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', tabelaPrecoController.find);
        this.router.post('/', tabelaPrecoController.create);

        this.router.get('/:id([0-9]+)', tabelaPrecoController.findById);
        this.router.put('/:id([0-9]+)', tabelaPrecoController.update);
        this.router.delete('/:id([0-9]+)', tabelaPrecoController.delete);
    }

}

export default new TabelaPrecoRouter().router;