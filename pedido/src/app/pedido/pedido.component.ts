import { VendedorEntity, VendedorService } from './../_services/vendedor.service';
import { ClienteEntity, ClienteService } from './../_services/cliente.service';
import { TabelaPrecoEntity, TabelaPrecoService } from './../_services/tabelapreco.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from './../_components/confirm-dialog/confirm-dialog.component';
import { PedidoService, PedidoEntity } from './../_services/pedido.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ItempedidoDialogComponent } from '../_components/itempedido-dialog/itempedido-dialog.component';

import * as moment from 'moment';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  @ViewChild(MatSidenav,{static: true}) sidenav: MatSidenav;

  public displayedColumns: string[] = ['codigo', 'dtpedido', 'tabelapreco', 'cliente', 'vendedor', 'total', 'options'];

  public pedidos: PedidoEntity[] = [];
  public tabelaprecos: TabelaPrecoEntity[] = [];
  public clientes: ClienteEntity[] = [];
  public vendedores: VendedorEntity[] = [];

  public pedido: PedidoEntity = new PedidoEntity();

  public msgerror: string;
  public loading: boolean;

  constructor(private service: PedidoService, private tabelaPrecoService: TabelaPrecoService,
              private clienteService: ClienteService, private vendedorService: VendedorService,
              private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
    
    //Inicia variaveis de controle
    this.msgerror = '';
    this.loading = true;

    //Carrega dados
    this.service.find().subscribe(result => {

      this.pedidos = result;

      //Tabela Preços
      this.tabelaPrecoService.find().subscribe(result => {

        this.tabelaprecos = result;
  
      }, error => {
        this.msgerror = error.message;
      });

      //Clientes
      this.clienteService.find().subscribe(result => {

        this.clientes = result;
  
      }, error => {
        this.msgerror = error.message;
      });

      //Vendedores
      this.vendedorService.find().subscribe(result => {

        this.vendedores = result;
  
      }, error => {
        this.msgerror = error.message;
      });

    }, error => {
      this.msgerror = error.message;
    }).add(() => this.loading = false);
  }
  private openSidebar(pedido: PedidoEntity) {
    this.pedido = pedido;

    this.sidenav.open();
  }
  public add() {
    this.openSidebar(new PedidoEntity());
  }
  public view( pedido: PedidoEntity ): void {
    this.openSidebar( pedido );
  }

  public excluir( pedido: PedidoEntity ): void {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: new ConfirmDialogModel('Excluir Registro', 'Deseja realemente excluir o registro?')
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = false;

        this.service.delete( pedido.id ).subscribe(result => {
          this.snackBar.open('Registro excluído com sucesso!', '', {
            duration: 3000
          });
        }, error => {
          this.msgerror = error.message;
        }).add(() => {
          this.loading = false;
        });

      }
    });

  }

  public confirmar(): void {
    this.loading = true;

    this.pedido.dtpedido = moment(this.pedido.dtpedido).format('YYYY-MM-DD');

    this.service.save(this.pedido).subscribe(result=>{
      this.snackBar.open('Registro salvo com sucesso!', '', {
        duration: 3000
      });
    }, error=>{
      this.msgerror = error.message;
    }).add(()=> {
      this.sidenav.close();

      this.loading = false;
    });
  }

  public compareOptions(id1, id2) {
    return id1 && id2 && id1.id === id2.id;
  }

  public addItem() {
    let dialogRef = this.dialog.open(ItempedidoDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pedido.itens.push(result);
      }
    });
  }

  public removeSelected(): void {
    let itensTemp = this.pedido.itens as any[];

    this.pedido.itens = itensTemp.filter(item => {
      return !item.checked;
    });
  }
  public someSelected(): boolean {
    let itensTemp = this.pedido.itens as any[];

    return itensTemp.some(item => {
      return item.checked;
    });
  }
}
