import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { INote } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor() { }

  private display: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public note: Subject<INote> = new Subject<INote>();

  watch(): Observable<boolean> {
    return this.display.asObservable();
  }

  open() {
    this.display.next(true);
  }

  close() {
    this.note.next(undefined);
    this.display.next(false);
  }

}


