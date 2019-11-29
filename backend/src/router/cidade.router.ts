import { Router } from 'express';
import  cidadeController   from '../controller/cidade.controller';

class CidadeRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', cidadeController.find);
        this.router.post('/', cidadeController.create);

        this.router.get('/:id([0-9]+)', cidadeController.findById);
        this.router.put('/:id([0-9]+)', cidadeController.update);
        this.router.delete('/:id([0-9]+)', cidadeController.delete);
    }

}

export default new CidadeRouter().router;