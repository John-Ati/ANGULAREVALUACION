import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutoresModule } from './autores/autores.module';
import { ApproutingModule } from 'src/app-routin.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    AutoresModule,
    SharedModule,
    RouterModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
