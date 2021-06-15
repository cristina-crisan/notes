import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { INote } from '../../models/note.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  @Input('note') note: INote = {} as INote;

  openModel(note: INote) {
    this.modalService.note.next(note)
    this.modalService.open();
  }
  ngOnInit(): void {
   
  }

}
