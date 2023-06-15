import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { WorkWithDirectivesComponent } from './parent/work-with-directives/work-with-directives.component';

@NgModule({
  declarations: [AppComponent, ParentComponent, WorkWithDirectivesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
