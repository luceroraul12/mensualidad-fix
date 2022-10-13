import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botonera-tabla',
  templateUrl: './botonera-tabla.component.html',
  styles: [
  ]
})
export class BotoneraTablaComponent implements OnInit {

  @Input() puedeVer: boolean = false;
  @Input() puedeEditar: boolean = false;
  @Input() puedeEliminar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
