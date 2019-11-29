import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorComponent } from './vendedor/vendedor.component';
import { TabelaprecoComponent } from './tabelapreco/tabelapreco.component';
import { ProdutoComponent } from './produto/produto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CidadeComponent } from './cidade/cidade.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EstadoComponent } from './estado/estado.component';

import { FilmeComponent } from './filme/filme.component';
import { GeneroComponent } from './genero/genero.component';


const routes: Routes = [
  { path: 'cliente', component: ClienteComponent},
  { path: 'cidade', component: CidadeComponent},
  { path: 'estado', component: EstadoComponent},
  { path: 'pedido', component: PedidoComponent},
  { path: 'produto', component: ProdutoComponent},
  { path: 'tabelapreco', component: TabelaprecoComponent},
  { path: 'vendedor', component: VendedorComponent},

  { path: 'filme', component: FilmeComponent},
  { path: 'genero', component: GeneroComponent},

  { path: '**', redirectTo: 'filme'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
