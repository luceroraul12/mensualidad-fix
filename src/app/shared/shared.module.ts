import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BotoneraTablaComponent } from './botonera-tabla/botonera-tabla.component';





@NgModule({
  declarations: [
  
    BotoneraTablaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    BotoneraTablaComponent
  ]
})
export class SharedModule { }
