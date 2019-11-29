import { TabelaPrecoEntity } from './../entity/tabelapreco.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class TabelaPrecoController {

    public async find(req: Request, res: Response) {

        try {
            const tabelaprecos = await getRepository(TabelaPrecoEntity).find();
            
            res.send(tabelaprecos);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const tabelapreco = req.body;

        try {
            await getRepository(TabelaPrecoEntity).save(tabelapreco);
            res.send(tabelapreco);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const tabelapreco = await getRepository(TabelaPrecoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!tabelapreco) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(tabelapreco);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const tabelapreco = await getRepository(TabelaPrecoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!tabelapreco) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(TabelaPrecoEntity).update(tabelapreco.id, novo);
            
            //Atualiza ID do novo
            novo.id = tabelapreco.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const tabelapreco = await getRepository(TabelaPrecoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!tabelapreco) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(TabelaPrecoEntity).delete(tabelapreco);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new TabelaPrecoController();