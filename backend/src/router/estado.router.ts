import { Router } from 'express';
import  estadoController  from '../controller/estado.controller';

class EstadoRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', estadoController.find);
        this.router.post('/', estadoController.create);

        this.router.get('/:id([0-9]+)', estadoController.findById);
        this.router.put('/:id([0-9]+)', estadoController.update);
        this.router.delete('/:id([0-9]+)', estadoController.delete);
    }

}

export default new EstadoRouter().router;