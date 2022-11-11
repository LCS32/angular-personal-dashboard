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
  { path: 'inicio', component: InicioComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'garantias', component: GarantiasComponent },
  // { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
