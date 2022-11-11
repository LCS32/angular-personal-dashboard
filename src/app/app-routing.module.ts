import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ClientesComponent } from './clientes/clientes.component';
import { GarantiasComponent } from './garantias/garantias.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotesComponent } from './notes/notes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, data: { tab: 1 } },
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 2 } },
  { path: 'todos', component: TodosComponent, data: { tab: 3 } },
  { path: 'notes', component: NotesComponent, data: { tab: 4 } },
  { path: 'pedidos', component: PedidosComponent, data: { tab: 5 } },
  { path: 'clientes', component: ClientesComponent, data: { tab: 6 } },
  { path: 'garantias', component: GarantiasComponent, data: { tab: 7 }},
  // { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
