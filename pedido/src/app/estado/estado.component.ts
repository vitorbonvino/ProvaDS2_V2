import { ConfirmDialogComponent, ConfirmDialogModel } from './../_components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EstadoService } from './../_services/estado.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EstadoEntity } from '../_services/estado.service';
import { MatTableDataSource } from '@angular/material/table';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {

  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  public displayedColumns: string[] = ['nome', 'sigla', 'options'];

  public dataSource = new MatTableDataSource<EstadoEntity>();
  public estados: EstadoEntity[] = [];

  public estado: EstadoEntity = new EstadoEntity();

  public msgerror: string;
  public loading: boolean;

  constructor(private service: EstadoService, private snackBar: MatSnackBar,
    private dialog: MatDialog, private socketClient: Socket) { }

  ngOnInit() {

    //Inicia variaveis de controle
    this.msgerror = '';
    this.loading = true;

    //Carrega dados
    this.service.find().subscribe(result => {

      this.estados = result;
      this.dataSource.data = this.estados;
      this.loading = false;

    }, error => {
      this.msgerror = error.message;
    }).add(() => this.loading = false);

    //Listner do evento Create (POST)
    this.socketClient.fromEvent('createEstado').subscribe(result => {
      this.afterCreate(result as EstadoEntity);
    });

    //Listner do evento Update (PUT)
    this.socketClient.fromEvent('updateEstado').subscribe(result => {
      this.afterUpdate(result as EstadoEntity);
    });

    //Listner do evento Detete (DELETE)
    this.socketClient.fromEvent('deleteEstado').subscribe(result => {
      this.afterDelete(result as EstadoEntity);
    });
  }
  private openSidebar(estado: EstadoEntity) {
    this.estado = estado;

    this.sidenav.open();
  }
  public add() {
    this.openSidebar(new EstadoEntity());
  }
  public editar(estado: EstadoEntity): void {
    this.openSidebar(estado);
  }

  public excluir(estado: EstadoEntity): void {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: new ConfirmDialogModel('Excluir Registro', 'Deseja realemente excluir o registro?')
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = false;

        this.service.delete(estado.id).subscribe(result => {
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

    this.service.save(this.estado).subscribe(result => {
      this.snackBar.open('Registro salvo com sucesso!', '', {
        duration: 3000
      });
    }, error => {
      this.msgerror = error.message;
    }).add(() => {
      this.sidenav.close();

      this.loading = false;
    });
  }

  private afterCreate(estado: EstadoEntity): void {
    this.estados.push(estado);
    this.dataSource.data = this.estados;
  }
  private afterUpdate(estado: EstadoEntity): void {
    let index = this.estados.findIndex(item => item.id == estado.id);

    this.estados[index] = estado;

    this.dataSource.data = this.estados;
  }
  private afterDelete(estado: EstadoEntity): void {
    let index = this.estados.findIndex(item => item.id == estado.id);

    this.estados.splice( index, 1 );

    this.dataSource.data = this.estados;
  }

}
