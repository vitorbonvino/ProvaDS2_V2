import { ClienteEntity } from '../entity/cliente.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class ClienteController {

    public async find(req: Request, res: Response) {

        try {
            const clientes = await getRepository(ClienteEntity).find();
            
            res.send(clientes);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const cliente = req.body;

        try {
            await getRepository(ClienteEntity).save(cliente);
            res.send(cliente);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const cliente = await getRepository(ClienteEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!cliente) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(cliente);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const cliente = await getRepository(ClienteEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!cliente) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(ClienteEntity).update(cliente.id, novo);
            
            //Atualiza ID do novo
            novo.id = cliente.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const cliente = await getRepository(ClienteEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!cliente) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(ClienteEntity).delete(cliente);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new ClienteController();