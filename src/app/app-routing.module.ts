import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { GarantiasComponent } from './garantias/garantias.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotesComponent } from './notes/notes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, data: { tab: 1 } },
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 2 } },
  { path: 'todos', component: TodosComponent, data: { tab: 3 } },
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'notes', component: NotesComponent, data: { tab: 4 } },
  { path: 'pedidos', component: PedidosComponent, data: { tab: 5 } },
  { path: 'clientes', component: ClientesComponent, data: { tab: 6 } },
  { path: 'garantias', component: GarantiasComponent, data: { tab: 7 }},
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent },
  // { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
