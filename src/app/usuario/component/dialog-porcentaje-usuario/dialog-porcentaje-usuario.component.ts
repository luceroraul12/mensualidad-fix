import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LegendPosition } from '@swimlane/ngx-charts';
import { PorcentajeUsuariosFacturas } from 'src/app/interfaces/porcentaje-usuarios-facturas.interface';
import { FacturaDto } from 'src/app/interfaces/servicio.interface';
import { UsuarioDto } from 'src/app/interfaces/usuarioDto.interface';
import { PorcentajeUsuariosFacturasService } from 'src/app/services/porcentaje-usuarios-facturas.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { UsuarioService } from 'src/app/services/usuario.service';


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
  public porcentajes!: PorcentajeUsuariosFacturas[];
  public facturas!: FacturaDto[];
  public usuarios!: UsuarioDto[];
  public usuariosMarcados!: UsuarioDto[];
  public facturaMarcada!: FacturaDto;

  public data: DataChart[] = []

  constructor(
    private porcentajeService: PorcentajeUsuariosFacturasService,
    private facturaService: ServicioService,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit(): void {
    this.facturaService.leer().subscribe(res => this.facturas = res);
    this.usuarioService.leer().subscribe(res =>  this.usuarios = res);

    this.porcentajeService.leer().subscribe(r => this.porcentajes = r);

    // this.raul = {
    //   name: 'raul',
    //   extra: {
    //     code: "raul"
    //   },
    //   value: 0
    // };
    // this.mondongus = {
    //   name: 'homito',
    //   extra: {
    //     code: "homito"
    //   },
    //   value: 0
    // };
    // this.shoverto = {
    //   name: 'Shoverto',
    //   extra: {
    //     code: "Shoverto"
    //   },
    //   value: 0
    // }
    // this.data = [
    //   this.mondongus,
    //   this.raul,
    //   this.shoverto
    // ]
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

  actualizar(): void {
  }
}
