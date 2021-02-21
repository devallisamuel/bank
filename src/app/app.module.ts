import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './card-list/card-list.component';
import { CardListDetailsComponent } from './card-list-details/card-list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardListComponent,
    CardListDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
