import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dialog-porcentaje-usuario',
  templateUrl: './dialog-porcentaje-usuario.component.html',
  styleUrls: ['./dialog-porcentaje-usuario.component.css']
})
export class DialogPorcentajeUsuarioComponent implements OnInit {

  single!: any[];
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme =  "nightLights";

  public data: any = [
  {
    "name": "Raul",
    "value": 60,
    "extra": {
      "code": "Homito"
    }
  },
  {
    "name": "Homito",
    "value": 40,
    "extra": {
      "code": "Mgs"
    }
  },
  {
    "name": "Shoverto",
    "value": 90,
    "extra": {
      "code": "Shover"
    }
  }
]

  constructor() { }

  ngOnInit(): void {
  }


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
