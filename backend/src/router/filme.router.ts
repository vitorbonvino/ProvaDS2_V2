import { Router } from 'express';
import  filmeController   from '../controller/filme.controller';

class FilmeRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', filmeController.find);
        this.router.post('/', filmeController.create);

        this.router.get('/:id([0-9]+)', filmeController.findById);
        this.router.put('/:id([0-9]+)', filmeController.update);
        this.router.delete('/:id([0-9]+)', filmeController.delete);
    }

}

export default new FilmeRouter().router;