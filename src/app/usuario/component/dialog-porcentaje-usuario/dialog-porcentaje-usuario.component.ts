import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';


export interface DataChart{
  name: string,
  value: number,
  extra: {
    code: string
  }
}

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
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  public raul!: DataChart;
  public mondongus!: DataChart;
  public shoverto!: DataChart;
  public colorScheme!: string;

  public data: DataChart[] = []

  constructor() { }

  ngOnInit(): void {
    this.raul = {
      name: 'raul',
      extra: {
        code: "raul"
      },
      value: 0
    };
    this.mondongus = {
      name: 'homito',
      extra: {
        code: "homito"
      },
      value: 0
    };
    this.shoverto = {
      name: 'Shoverto',
      extra: {
        code: "Shoverto"
      },
      value: 0
    }
    this.data = [
      this.mondongus,
      this.raul,
      this.shoverto
    ]
    this.colorScheme = this.cumpleEquivalencia() ? "nightLights" : "neons";
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

  changeData(): void {
    this.data = [...this.data];
    this.colorScheme = this.cumpleEquivalencia() ? "fire" : "neons";
  }

  cumpleEquivalencia(): boolean {
    return this.data.map(a => a.value)
            .reduce((a,b) => a+b) == 100;
  }
}
