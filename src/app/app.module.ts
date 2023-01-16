import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleComponent } from './single/single.component';
import { MultiComponent } from './multi/multi.component';
import { TemplateExampleComponent } from './template-example/template-example.component';
import { ViewExampleComponent } from './view-example/view-example.component';
import { ChildComponent } from './child/child.component';
import { ViewchildComponent } from './viewchild/viewchild.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    MultiComponent,
    TemplateExampleComponent,
    ViewExampleComponent,
    ChildComponent,
    ViewchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
