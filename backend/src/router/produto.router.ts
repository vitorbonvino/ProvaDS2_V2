import { Router } from 'express';
import  produtoController  from '../controller/produto.controller';

class ProdutoRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', produtoController.find);
        this.router.post('/', produtoController.create);

        this.router.get('/:id([0-9]+)', produtoController.findById);
        this.router.put('/:id([0-9]+)', produtoController.update);
        this.router.delete('/:id([0-9]+)', produtoController.delete);
    }

}

export default new ProdutoRouter().router;