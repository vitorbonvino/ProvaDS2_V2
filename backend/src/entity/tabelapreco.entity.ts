import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity({name: 'tabelapreco'})
export class TabelaPrecoEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false, length: 6})
    codigo: string;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: true, type: 'double'})
    fator: number;

}