import { GeneroEntity } from './../entity/genero.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class GeneroController {9

    public async find(req: Request, res: Response) {

        try {
            const generos = await getRepository(GeneroEntity).find();
            
            res.send(generos);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const genero = req.body;

        try {
            await getRepository(GeneroEntity).save(genero);
            res.send(genero);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const genero = await getRepository(GeneroEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!genero) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(genero);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const genero = await getRepository(GeneroEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!genero) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(GeneroEntity).update(genero.id, novo);
            
            //Atualiza ID do novo
            novo.id = genero.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const genero = await getRepository(GeneroEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!genero) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(GeneroEntity).delete(genero);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new GeneroController();