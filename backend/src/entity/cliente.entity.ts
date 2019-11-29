import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { CidadeEntity } from './cidade.entity';


@Entity({name: 'cliente'})
export class ClienteEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: true, length: 6})
    codigo: string;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: false, length: 255})
    email: string;

    @ManyToOne(type => CidadeEntity, { eager: true })
    @JoinColumn({ name: 'cidade_id' })
    cidade: CidadeEntity;

}