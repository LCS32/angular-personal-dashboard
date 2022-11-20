import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements OnDestroy {

  notes: Note[] = [];

  storageListenSub: Subscription;

  constructor() { 
    this.loadState();


    this.storageListenSub = fromEvent<StorageEvent>(window, 'storage').subscribe((event: StorageEvent ) => {
      if (event.key === 'notes') this.loadState();

      console.log("event fired")
      console.log(event)
    })
  }



  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }

  getNotes() {
    return this.notes
  }

  getNote(id: string) {
    return this.notes.find(n => n.id === id)
  }

  addNote(note: Note){
    this.notes.push(note);
    this.saveState();
  }

  updateNote(id: string, updateFields: Partial<Note>) {
    const note = this.getNote(id);
    Object.assign(note!, updateFields);

    this.saveState();
  }

  deleteNote(id: string){
    const noteIndex = this.notes.findIndex(n => n.id === id);
    if(noteIndex == -1) return

    this.notes.splice(noteIndex, 1 );
    this.saveState();
  }

  saveState(){
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }

  loadState(){
    try {
      const notesInStorage = JSON.parse(localStorage.getItem('notes')!);
      this.notes.length = 0 //clear the notes array (whyle keeping the reference)
      this.notes.push(...notesInStorage)
    } catch (e) {
      console.log('There was an error retrieving the notes from localStorage')
      console.log(e)
    }
  }
  

}
