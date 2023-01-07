import { Component, OnInit } from '@angular/core';
import { Boton } from 'src/app/interfaces/boton.interface';

@Component({
  selector: 'app-vista-botonera',
  templateUrl: './vista-botonera.component.html',
  styleUrls: ['./vista-botonera.component.css']
})
export class VistaBotoneraComponent implements OnInit {

  public list: Boton[] = [
    {
      titulo:"opcion 1",
      accion: () => alert("opcion 1")
    },
    {
      titulo:"opcion 2",
      accion: () => alert("opcion 2")
    },
    {
      titulo:"opcion 3",
      accion: () => alert("opcion 3")
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
