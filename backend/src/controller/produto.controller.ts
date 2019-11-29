import { ProdutoEntity } from './../entity/produto.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class ProdutoController {

    public async find(req: Request, res: Response) {

        try {
            const produtos = await getRepository(ProdutoEntity).find();
            
            res.send(produtos);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const produto = req.body;

        try {
            await getRepository(ProdutoEntity).save(produto);
            res.send(produto);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const produto = await getRepository(ProdutoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!produto) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(produto);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const produto = await getRepository(ProdutoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!produto) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(ProdutoEntity).update(produto.id, novo);
            
            //Atualiza ID do novo
            novo.id = produto.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const produto = await getRepository(ProdutoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!produto) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(ProdutoEntity).delete(produto);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new ProdutoController();