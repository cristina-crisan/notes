import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INote } from '../../models/note.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  public arrayOfNotes: INote[] = [];
  private allNotes: INote[] = [];
  public note: INote = {} as INote;

  add() {
    this.router.navigateByUrl(`/note`);
  }

  onDelete(note: INote) {
    this.arrayOfNotes.splice(this.arrayOfNotes.findIndex(element => element.id === note.id), 1)
    this.localStorageService.set("notes", this.arrayOfNotes);
  }

  onSearch(value: string) {
    this.arrayOfNotes = this.allNotes.filter(note => note.title.toLowerCase().includes(value.toLowerCase()));
  }
  
  ngOnInit(): void {
    this.allNotes = this.localStorageService.get("notes");
    this.arrayOfNotes = this.allNotes;
  }

}

