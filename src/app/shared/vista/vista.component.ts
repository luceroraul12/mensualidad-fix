import { Component, Input, OnInit } from '@angular/core';
import { Boton } from 'src/app/interfaces/boton.interface';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  @Input() botones!: Boton[];

  @Input() titulo!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
