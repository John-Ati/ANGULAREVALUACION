import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutoreslistComponent } from './listaautores/pages/autoreslist/autoreslist.component';
import { ObrasComponent } from './listaautores/pages/obras/obras.component';






@NgModule({
  declarations: [
    LoginComponent,
    AutoreslistComponent,
    ObrasComponent,
 
    
  ],
  exports: [
    LoginComponent,
    AutoreslistComponent,
    ObrasComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,


  ]
  
})
export class AutoresModule { }
