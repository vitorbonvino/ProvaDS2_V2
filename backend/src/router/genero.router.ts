import { Router } from 'express';
import  generoController   from '../controller/genero.controller';

class GeneroRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', generoController.find);
        this.router.post('/', generoController.create);

        this.router.get('/:id([0-9]+)', generoController.findById);
        this.router.put('/:id([0-9]+)', generoController.update);
        this.router.delete('/:id([0-9]+)', generoController.delete);
    }

}

export default new GeneroRouter().router;