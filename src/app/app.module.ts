import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { GarantiasComponent } from './garantias/garantias.component';
import { BookmarkTileComponent } from './bookmark-tile/bookmark-tile.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    PedidosComponent,
    ClientesComponent,
    GarantiasComponent,
    BookmarkTileComponent,
    InicioComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
