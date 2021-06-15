import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INote } from '../../models/note.model';
import { HelpersService } from '../../services/helpers.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  public note: INote = { color: "#FFFF00" } as INote;
  public arrayOfNotes: INote[] = [];

  constructor(
    public service: LocalStorageService,
    public serviceHelpers: HelpersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.arrayOfNotes = this.service.get("notes");
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.arrayOfNotes.filter(item => {
        if (item.id == id) {
          this.note = item;
        }
      });
    }
  }

  save() {
    if (!this.note.id) {
      this.note.id = this.serviceHelpers.generateGuid();
      this.arrayOfNotes.push(this.note);
    }
    this.note.date = new Date();
    this.service.set("notes", this.arrayOfNotes);
    this.router.navigateByUrl(`/`);
  }

  cancel() {
    this.router.navigateByUrl(`/`);
  }
}

