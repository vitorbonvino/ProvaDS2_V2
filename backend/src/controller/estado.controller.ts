import { EstadoEntity } from './../entity/estado.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class EstadoController {

    public async find(req: Request, res: Response) {

        try {
            const estados = await getRepository(EstadoEntity).find();
            
            res.send(estados);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const estado = req.body;

        try {
            await getRepository(EstadoEntity).save(estado);

            req.io.emit('createEstado', estado);

            res.send(estado);

        } catch(error) {
            res.status(500).send(error);
        }
    }

    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const estado = await getRepository(EstadoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!estado) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(estado);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const estado = await getRepository(EstadoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!estado) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(EstadoEntity).update(estado.id, novo);
            
            //Atualiza ID do novo
            novo.id = estado.id;

            req.io.emit('updateEstado', novo);

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const estado = await getRepository(EstadoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!estado) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(EstadoEntity).delete(estado);

            req.io.emit('deleteEstado', estado);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }
}

export default new EstadoController();