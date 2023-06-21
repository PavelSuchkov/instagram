import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExamplesComponent } from './components/examples/examples.component';
import { WorkWithDirectivesComponent } from './components/examples/directives-example/work-with-directives.component';
import { PipesExampleComponent } from './components/examples/pipes-example/pipes-example.component';
import { DiExampleComponent } from './components/examples/di-example/di-example.component';
import { CompAComponent } from './components/comps/comp-a/comp-a.component';
import { CompBComponent } from './components/comps/comp-b/comp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    WorkWithDirectivesComponent,
    PipesExampleComponent,
    DiExampleComponent,
    CompAComponent,
    CompBComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
