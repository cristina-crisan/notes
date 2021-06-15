import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NoteComponent } from './components/note/note.component';
import { ViewNoteComponent } from './components/view-note/view-note.component';
import { NoteItemComponent } from './components/note-item/note-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteComponent,
    HeaderComponent,
    ToolbarComponent,
    ViewNoteComponent,
    NoteItemComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
