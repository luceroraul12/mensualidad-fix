import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BotoneraTablaComponent } from './botonera-tabla/botonera-tabla.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogBasicoComponent } from './dialog-basico/dialog-basico.component';
import { VistaComponent } from './vista/vista.component';
import { VistaBotoneraComponent } from './vista/component/vista-botonera/vista-botonera.component';





@NgModule({
  declarations: [
  
    BotoneraTablaComponent,
    DialogBasicoComponent,
    VistaComponent,
    VistaBotoneraComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports:[
    BotoneraTablaComponent,
    DialogBasicoComponent,
    VistaComponent
  ]
})
export class SharedModule { }
