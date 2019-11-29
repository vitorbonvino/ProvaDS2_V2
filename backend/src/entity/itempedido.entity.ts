import { ProdutoEntity } from './produto.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PedidoEntity } from './pedido.entity';


@Entity({name: 'itempedido'})
export class ItemPedidoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => PedidoEntity, { nullable: false })
    @JoinColumn({name: 'pedido_id'})
    pedido: PedidoEntity;

    @ManyToOne(type => ProdutoEntity, { eager: true, nullable: false })
    @JoinColumn({name: 'produto_id'})
    produto: ProdutoEntity;

    @Column({type: 'double', nullable: false})
    qtdade: number;

    @Column({type: 'double', nullable: false})
    vlrunit: number;

}