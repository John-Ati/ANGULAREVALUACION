import {NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { AutoreslistComponent } from "./app/autores/listaautores/pages/autoreslist/autoreslist.component";
import { LoginComponent } from "./app/autores/login/login.component";
import { ObrasComponent } from "./app/autores/listaautores/pages/obras/obras.component";
import { RamdonautorComponent } from "./app/autores/listaautores/pages/ramdonautor/ramdonautor.component";



const routes:Routes=[
{
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
},

{
    path: 'listaAutores',
    component: AutoreslistComponent
},
{
    path: 'obras',
    component: ObrasComponent
},
{
    path: 'DiferentesAutores',
    component: RamdonautorComponent
},
{
    path: '**',
   redirectTo: ''
}
    
];





@NgModule({

    imports:[

        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class ApproutingModule{}