import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { MarcatextoDirective } from './Shared/directives/marcatexto.directive';

import { PeopleService } from './Shared/Services/people.service';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MarcatextoDirective,
    ListPeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
