import { VendedorEntity } from './../entity/vendedor.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class VendedorController {

    public async find(req: Request, res: Response) {

        try {
            const vendedores = await getRepository(VendedorEntity).find();
            
            res.send(vendedores);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const vendedor = req.body;

        try {
            await getRepository(VendedorEntity).save(vendedor);
            res.send(vendedor);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const vendedor = await getRepository(VendedorEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!vendedor) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(vendedor);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const vendedor = await getRepository(VendedorEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!vendedor) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(VendedorEntity).update(vendedor.id, novo);
            
            //Atualiza ID do novo
            novo.id = vendedor.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const vendedor = await getRepository(VendedorEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!vendedor) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(VendedorEntity).delete(vendedor);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new VendedorController();