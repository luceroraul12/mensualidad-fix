import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { TablaUsuarioComponent } from './component/tabla-usuario/tabla-usuario.component';
import { DialogPorcentajeUsuarioComponent } from './component/dialog-porcentaje-usuario/dialog-porcentaje-usuario.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsuarioComponent,
    TablaUsuarioComponent,
    DialogPorcentajeUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ]
})
export class UsuarioModule { }
