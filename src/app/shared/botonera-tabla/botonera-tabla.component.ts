import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() ver: EventEmitter<boolean> = new EventEmitter();
  @Output() editar: EventEmitter<boolean> = new EventEmitter();
  @Output() eliminar: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickVer(){
    this.ver.emit(true);
  }

  clickEditar(){
    this.editar.emit(true);
  }

  clickEliminar(){
    this.eliminar.emit(true);
  }

}
