import { ConfirmDialogComponent, ConfirmDialogModel } from './../_components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenav } from '@angular/material/sidenav';
import { ProdutoService, ProdutoEntity } from './../_services/produto.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  @ViewChild(MatSidenav,{static: true}) sidenav: MatSidenav;

  public displayedColumns: string[] = ['codigo', 'nome', 'descricao', 'preco', 'options'];

  public produtos: ProdutoEntity[] = [];

  public produto: ProdutoEntity = new ProdutoEntity();

  public msgerror: string;
  public loading: boolean;

  constructor(private service: ProdutoService, private snackBar: MatSnackBar, 
              private dialog: MatDialog) { }

  ngOnInit() {
    
    //Inicia variaveis de controle
    this.msgerror = '';
    this.loading = true;

    //Carrega dados
    this.service.find().subscribe(result => {

      this.produtos = result;

      this.loading = false;

    }, error => {
      this.msgerror = error.message;
    }).add(() => this.loading = false);
  }
  private openSidebar(produto: ProdutoEntity) {
    this.produto = produto;

    this.sidenav.open();
  }
  public add() {
    this.openSidebar(new ProdutoEntity());
  }
  public editar( produto: ProdutoEntity ): void {
    this.openSidebar( produto );
  }

  public excluir( produto: ProdutoEntity ): void {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: new ConfirmDialogModel('Excluir Registro', 'Deseja realemente excluir o registro?')
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = false;

        this.service.delete( produto.id ).subscribe(result => {
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

    this.service.save(this.produto).subscribe(result=>{
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

}
