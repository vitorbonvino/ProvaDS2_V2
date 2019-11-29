import { FilmeEntity } from './../entity/filme.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class FilmeController {

    public async find(req: Request, res: Response) {

        try {
            const filmes = await getRepository(FilmeEntity).find();
            
            res.send(filmes);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const filme = req.body;

        try {
            await getRepository(FilmeEntity).save(filme);
            res.send(filme);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const filme = await getRepository(FilmeEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!filme) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(filme);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const filme = await getRepository(FilmeEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!filme) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(FilmeEntity).update(filme.id, novo);
            
            //Atualiza ID do novo
            novo.id = filme.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const filme = await getRepository(FilmeEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!filme) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(FilmeEntity).delete(filme);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new FilmeController();