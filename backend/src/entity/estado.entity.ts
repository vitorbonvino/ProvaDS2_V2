import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity({name: 'estado'})
export class EstadoEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false, length: 100})
    nome: string;

    @Column({nullable: false, length: 2})
    sigla: string;

}