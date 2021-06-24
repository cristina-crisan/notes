import { Injectable } from '@angular/core';
import { INote } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, value: INote[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string ) {
    if(localStorage[key]) {
      return JSON.parse(localStorage.getItem(key) || "");
    } else {
      return [];
    }
  }
}
 