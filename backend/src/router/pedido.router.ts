import { Router } from 'express';
import  pedidoController  from '../controller/pedido.controller';

class PedidoRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', pedidoController.find);
        this.router.post('/', pedidoController.create);

        this.router.get('/:id([0-9]+)', pedidoController.findById);
        this.router.put('/:id([0-9]+)', pedidoController.update);
        this.router.delete('/:id([0-9]+)', pedidoController.delete);
    }

}

export default new PedidoRouter().router;