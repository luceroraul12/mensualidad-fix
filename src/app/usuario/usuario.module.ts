import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { TablaUsuarioComponent } from './component/tabla-usuario/tabla-usuario.component';



@NgModule({
  declarations: [
    UsuarioComponent,
    TablaUsuarioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ]
})
export class UsuarioModule { }
