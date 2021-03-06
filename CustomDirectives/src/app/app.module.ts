import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHighlightDirective } from './app-highlight.directive';
import { CopyDirectiveDirective } from './copy-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppHighlightDirective,
    CopyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
