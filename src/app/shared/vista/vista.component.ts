import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  @Input() titulo!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
