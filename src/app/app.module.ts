import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionComponent } from './accordion/components/accordion/accordion.component';
import { AccordionListComponent } from './accordion/containers/accordion-list/accordion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionListComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
