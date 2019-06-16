import { AppReloadService } from './app-reload/app-reload.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppReloadComponent } from './app-reload/app-reload.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [AppReloadComponent],
  declarations: [AppReloadComponent],
  providers: [AppReloadService]
})
export class ReloadModule { }
