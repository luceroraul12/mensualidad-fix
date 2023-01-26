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
import { DeslizadorUsuarioComponent } from './component/deslizador-usuario/deslizador-usuario.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    UsuarioComponent,
    TablaUsuarioComponent,
    DialogPorcentajeUsuarioComponent,
    DeslizadorUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ]
})
export class UsuarioModule { }
