import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { CidadeEntity } from './cidade.entity';


@Entity({name: 'vendedor'})
export class VendedorEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false, length: 6})
    codigo: string;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: false, length: 255})
    email: string;

    @ManyToOne(type => CidadeEntity, { eager: true })
    @JoinColumn({ name: 'cidade_id' })
    cidade: CidadeEntity;

}