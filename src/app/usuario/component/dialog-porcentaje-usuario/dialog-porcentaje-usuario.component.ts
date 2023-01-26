import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LegendPosition } from '@swimlane/ngx-charts';
import { PorcentajeUsuariosFacturas } from 'src/app/interfaces/porcentaje-usuarios-facturas.interface';
import { FacturaDto } from 'src/app/interfaces/servicio.interface';
import { UsuarioDto } from 'src/app/interfaces/usuarioDto.interface';
import { PorcentajeUsuariosFacturasService } from 'src/app/services/porcentaje-usuarios-facturas.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { UsuarioComunicacionService } from 'src/app/services/usuario-comunicacion.service';
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

  public data: DataChart[] = [];

  constructor(
    private porcentajeService: PorcentajeUsuariosFacturasService,
    private facturaService: ServicioService,
    private usuarioService: UsuarioService,
    private usuarioComunicadorService: UsuarioComunicacionService
    ) { }

  ngOnInit(): void {
    this.facturaService.leer().subscribe(res => this.facturas = res);
    this.usuarioService.leer().subscribe(res =>  this.usuarios = res);

    this.porcentajeService.leer().subscribe(r => this.porcentajes = r);
    this.usuarioComunicadorService.comunicador$.subscribe(
      user => {
        let index: number = this.usuariosMarcados.findIndex(({id}) => id == user.id);
        this.usuariosMarcados[index].porcentaje = user.porcentaje;
        this.actualizar();
      }
    );
  }

  cumpleEquivalencia(): boolean {
    return this.data.map(a => a.value)
            .reduce((a,b) => a+b) == 100;
  }

  actualizar(): void {
    let data: DataChart[] = [];
    this.usuariosMarcados.forEach(user => {
      data.push({
        name: user.usuario,
        value: user.porcentaje!,
        extra: {code: user.usuario}
      });
    });
    this.data = [...data];
    this.colorScheme = this.cumpleEquivalencia() ? "fire" : "neons";
  }
}
