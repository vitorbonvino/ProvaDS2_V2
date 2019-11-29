import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EstadoComponent } from './estado/estado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CidadeComponent } from './cidade/cidade.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoComponent } from './produto/produto.component';
import { TabelaprecoComponent } from './tabelapreco/tabelapreco.component';
import { VendedorComponent } from './vendedor/vendedor.component';

import { FilmeComponent } from './filme/filme.component';
import { GeneroComponent } from './genero/genero.component';

import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';

import { ConfirmDialogComponent } from './_components/confirm-dialog/confirm-dialog.component';
import { TotalPedidoPipe } from './_pipes/total-pedido.pipe';
import { ItempedidoDialogComponent } from './_components/itempedido-dialog/itempedido-dialog.component';

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
const socketConfig: SocketIoConfig = { url: environment.urlSaaS, options: {} }

@NgModule({
  declarations: [
    AppComponent,
    EstadoComponent,
    ClienteComponent,
    CidadeComponent,
    PedidoComponent,
    ProdutoComponent,
    TabelaprecoComponent,
    VendedorComponent,
    FilmeComponent,
    GeneroComponent,
    ConfirmDialogComponent,
    TotalPedidoPipe,
    ItempedidoDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatBadgeModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  providers: [],
  entryComponents: [
    ConfirmDialogComponent,
    ItempedidoDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
