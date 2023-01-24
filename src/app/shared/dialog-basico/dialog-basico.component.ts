import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-basico',
  templateUrl: './dialog-basico.component.html',
  styleUrls: ['./dialog-basico.component.css']
})
export class DialogBasicoComponent implements OnInit {

  @Input()  titulo: string= "";
  @Input()  subtitulo: string= "";

  constructor() { }

  ngOnInit(): void {
  }

}
