import { CidadeEntity } from './../entity/cidade.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class CidadeController {

    public async find(req: Request, res: Response) {

        try {
            const cidades = await getRepository(CidadeEntity).find();
            
            res.send(cidades);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const cidade = req.body;

        try {
            await getRepository(CidadeEntity).save(cidade);
            res.send(cidade);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const cidade = await getRepository(CidadeEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!cidade) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(cidade);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const cidade = await getRepository(CidadeEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!cidade) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(CidadeEntity).update(cidade.id, novo);
            
            //Atualiza ID do novo
            novo.id = cidade.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const cidade = await getRepository(CidadeEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!cidade) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(CidadeEntity).delete(cidade);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new CidadeController();