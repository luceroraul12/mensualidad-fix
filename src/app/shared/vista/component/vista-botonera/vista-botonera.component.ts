import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-botonera',
  templateUrl: './vista-botonera.component.html',
  styleUrls: ['./vista-botonera.component.css']
})
export class VistaBotoneraComponent implements OnInit {

  public list: string[] = [
    "opcion 1", "opcion 2", "opcion 2", "opcion 2", "opcion 2", "opcion 2", "opcion 2", "opcion 2", "opcion 2", "opcion 2", "opcion 2"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
