import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarks: Bookmark[] = []

  storageListenSub: Subscription

  constructor() {
    this.loadState();

    this.storageListenSub = fromEvent<StorageEvent>(window, 'storage').subscribe((event: StorageEvent ) => {
      if (event.key === 'bookmarks') this.loadState();

      console.log("event fired")
      console.log(event)
    })
  }

  getBookmarks(){
    return this.bookmarks
  }

  getBookmark(id: string){
    return this.bookmarks.find(b => b.id === id)
  }

  addBookmark(bookmark: Bookmark){
    this.bookmarks.push(bookmark)
    this.saveState()
  }

  updateBookmark(id:string, updateFields: Partial<Bookmark>){
    const bookmark = this.getBookmark(id)
    Object.assign(bookmark!, updateFields)
    this.saveState()
  }

  deleteBookmark(id: string){
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)
    if(bookmarkIndex == -1) return
    this.bookmarks.splice(bookmarkIndex, 1)
    this.saveState()
  }

  saveState(){
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
  }

  loadState(){
    try {
      const bookmarksInStorage = JSON.parse(localStorage.getItem('bookmarks')!, (key, value) => {
        if (key === 'url') return new URL(value)
        return value
      })
      this.bookmarks.length = 0 // clear array while keeping reference
      this.bookmarks.push(...bookmarksInStorage)
    } catch (e) {
      console.log('Threr was an error retrieving the bookmarks from localStorage')
      console.log(e)
    }
  }
}
