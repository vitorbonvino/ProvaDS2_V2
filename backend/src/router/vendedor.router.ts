import { Router } from 'express';
import  vendedorController   from '../controller/vendedor.controller';

class VendedorRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', vendedorController.find);
        this.router.post('/', vendedorController.create);

        this.router.get('/:id([0-9]+)', vendedorController.findById);
        this.router.put('/:id([0-9]+)', vendedorController.update);
        this.router.delete('/:id([0-9]+)', vendedorController.delete);
    }

}

export default new VendedorRouter().router;