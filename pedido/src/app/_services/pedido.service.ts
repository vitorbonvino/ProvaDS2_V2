import { VendedorEntity } from './vendedor.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TabelaPrecoEntity } from './tabelapreco.service';
import { ClienteEntity } from './cliente.service';
import { ProdutoEntity } from './produto.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private http: HttpClient) { }

  public find():Observable<PedidoEntity[]> {
    return this.http.get<PedidoEntity[]>( environment.urlSaaS+ '/pedidos');
  }
  public save( pedido: PedidoEntity ) {
    if (pedido.id) {
      return this.update( pedido );
    } else {
      return this.create( pedido );
    }
  }
  public delete( id: number ):Observable<PedidoEntity> {
    return this.http.delete<PedidoEntity>( environment.urlSaaS+ '/pedidos/'+ id);
  }
  private create( pedido: PedidoEntity ):Observable<PedidoEntity> {
    return this.http.post<PedidoEntity>( environment.urlSaaS+ '/pedidos', pedido);
  }
  private update( pedido: PedidoEntity ):Observable<PedidoEntity> {
    return this.http.put<PedidoEntity>( environment.urlSaaS+ '/pedidos/'+ pedido.id, pedido);
  }
}

export class ItemPedidoEntity {

  id: number;
  produto: ProdutoEntity;
  qtdade: number;
  vlrunit: number;

}

export class PedidoEntity {

  id: number;
  codigo: string;
  dtpedido: string;
  observacao: string;
  tabelapreco: TabelaPrecoEntity;
  cliente: ClienteEntity;
  vendedor: VendedorEntity;
  itens: ItemPedidoEntity[];

  constructor() {
    this.itens = [];
  }

}