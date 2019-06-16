import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReloadModule } from './reload/reload.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReloadModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
