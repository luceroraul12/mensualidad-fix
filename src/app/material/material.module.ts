import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
