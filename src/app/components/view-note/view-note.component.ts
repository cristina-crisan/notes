import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { INote } from '../../models/note.model';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})
export class ViewNoteComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    private LocalStorageService: LocalStorageService,
    private router: Router) {
    this.modalService.note.subscribe(result => {
      this.note = result;
    })
  }

  public display$!: Observable<boolean>;
  public arrayOfNotes: INote[] = [];
  public note!: INote;//to tell typescript that this variable will have a value at runtime
  @Output() onDelete = new EventEmitter<INote>();
  close() {
    this.modalService.close();
  }

  editPage(note: INote) {
    this.router.navigateByUrl(`note/${this.note.id}`);
    this.close();
  }

  delete(note: INote) {
    this.onDelete.emit(note);
    this.close();
  }

  ngOnInit(): void {
    this.display$ = this.modalService.watch();
    this.arrayOfNotes = this.LocalStorageService.get("notes");
  }
}
