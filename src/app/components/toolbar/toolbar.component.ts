import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INote } from 'src/app/models/note.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }
  public status: boolean = false;
  public inputValue = "";
  public sortedNotes: INote[] = [];

  @Input() notes: INote[] = [];
  @Output() onSearch = new EventEmitter<string>();

  openDropdown() {
    this.status = !this.status;
  }

  search(){
    this.onSearch.emit(this.inputValue);
  }

  sortAlphabetical() {
    return this.sortedNotes = this.notes.sort((a, b) => (a.title > b.title.toLowerCase()) ? 1 : ((b.title > a.title.toLowerCase()) ? -1 : 0));
 
  }

  sortByDateAsc(){
    return this.sortedNotes = this.notes.sort((a,b)=>new Date(a.date).getTime() - new Date(b.date).getTime());

  }

  sortByDateDesc(){
    return this.sortedNotes = this.notes.sort((a,b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  ngOnInit(): void {
  }

}
