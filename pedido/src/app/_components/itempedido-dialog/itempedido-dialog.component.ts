import { MatDialogRef } from '@angular/material/dialog';
import { ItemPedidoEntity } from './../../_services/pedido.service';
import { ProdutoEntity, ProdutoService } from './../../_services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itempedido-dialog',
  templateUrl: './itempedido-dialog.component.html',
  styleUrls: ['./itempedido-dialog.component.scss']
})
export class ItempedidoDialogComponent {

  public itempedido: ItemPedidoEntity;
  public produtos: ProdutoEntity[];

  constructor(private produtoService: ProdutoService, public dialogRef: MatDialogRef<ItempedidoDialogComponent>) {
    this.itempedido = new ItemPedidoEntity();

    this.produtoService.find().subscribe(result=> {
      this.produtos = result;
    })
  }

  public onDismiss(): void {
    this.dialogRef.close(false);
  }
  public onConfirm(): void {
    this.dialogRef.close(this.itempedido);
  }
  public changeItem(): void {
    this.itempedido.vlrunit = this.itempedido.produto.preco;
    this.itempedido.qtdade = 1;
  }
}
