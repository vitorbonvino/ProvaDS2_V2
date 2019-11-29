import { PedidoEntity } from './../entity/pedido.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class PedidoController {

    public async find(req: Request, res: Response) {

        try {
            const pedidos = await getRepository(PedidoEntity).find();
            
            res.send(pedidos);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const pedido = req.body;

        try {
            await getRepository(PedidoEntity).save(pedido);
            res.send(pedido);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const pedido = await getRepository(PedidoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!pedido) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(pedido);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const pedido = await getRepository(PedidoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!pedido) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(PedidoEntity).update(pedido.id, novo);
            
            //Atualiza ID do novo
            novo.id = pedido.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const pedido = await getRepository(PedidoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!pedido) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(PedidoEntity).delete(pedido);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new PedidoController();