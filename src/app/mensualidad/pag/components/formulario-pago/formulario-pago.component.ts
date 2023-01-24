import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/internal/operators/subscribeOn';
import { Actividad } from 'src/app/interfaces/informacionFormularioTabla.interface';
import { PagoDto } from 'src/app/interfaces/pago.interface';
import { FacturaDto } from 'src/app/interfaces/servicio.interface';
import { ComunicadorService } from 'src/app/services/comunicador.service';
import { PagoService } from 'src/app/services/pago.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { TablaServiceService } from 'src/app/services/tabla-service.service';



@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.component.html',
  styles: [
  ]
})
export class FormularioPagoComponent implements OnInit, OnDestroy{

  @Input() serviciosDisponibles!: FacturaDto[];
  @Input() usaFacturasPersonalizadas: boolean = false;

  @Input() esParaModificar: boolean = false;
  @Input() pagoCreado!: PagoDto;

  public orientacion!: string;

  private subs: Subscription = new Subscription;


  @ViewChild("formPago") formPago!: NgForm;


  public fechaEmitida: Date = new Date();

  constructor(
    private servicioService: ServicioService,
    private pagoService: PagoService,
    private tablaService: TablaServiceService<PagoDto>,
    private comunicadorService: ComunicadorService

  ) { 
    // this.resetear();
   }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.resetear();
    //TODO: ver de arreglar esto, no deberia existir facturas personalizadas sino que Es para resumen
    //funcionamiento normal, cuando no tiene facturas personalizadas ni para modificar
    if(!this.usaFacturasPersonalizadas && !this.esParaModificar){
      this.subs.add(
        this.servicioService.leer().subscribe(
          (servicios: FacturaDto[]) => this.serviciosDisponibles = servicios
        )
      ) 
    } else if(this.esParaModificar){
      // TODO: ver si esto no hay que modificarlo, solo lo arregle para que compilara
      this.serviciosDisponibles = [{
        id: this.pagoCreado.idFactura!,
        nombre: this.pagoCreado.factura!,
        url: "",
        esRepetible: false
      }];
    };

    //para especificar la fecha del formulario desde resumen
    this.subs.add(
      this.comunicadorService.fechaResumen$.subscribe(
        fecha => this.fechaEmitida = fecha
      )
    )
    this.adaptarOrientacion();

  }


  cargarFormulario(): void {
    console.log(this.formPago.value);
    let factura: FacturaDto = this.formPago.controls['servicio'].value;
    let pagoDto: PagoDto = {
      idFactura: factura.id,
      fechaDePago: this.pagoCreado.fechaDePago,
      pago: this.pagoCreado.pago,
      comentario: this.pagoCreado.comentario
    }
    if(!this.esParaModificar){
      this.subs.add(
        this.pagoService.agregar(pagoDto).subscribe( respuesta => {
          this.tablaService.comunicadorFormularioTabla$.next({
            actividad: Actividad.CREAR,
            elemento: respuesta
          });
          this.resetear();
        },
        err => alert('error al intentar crear por formulario de pagos'))
      );
    } else {
      this.subs.add(
        this.pagoService.modificar(this.pagoCreado).subscribe(
          respuesta => {
            this.tablaService.comunicadorFormularioTabla$.next({
              actividad: Actividad.MODIFICAR,
              elemento: respuesta
            });
          }
        )
      );
    }


    
  }

  resetear():void {
    if(!this.esParaModificar){
      let factura: FacturaDto = this.serviciosDisponibles ? this.serviciosDisponibles[0] :{id: 0, nombre: '', url: '', esRepetible: false};
    
      this.pagoCreado = {
        factura: factura.nombre,
        fechaDePago: this.esParaModificar ? this.pagoCreado.fechaDePago : this.fechaEmitida,
        comentario: ''
      };
    }
  }

  adaptarOrientacion(): string{
    return this.esParaModificar ? "column" : "row";
  }

  esURLValida(url: string): boolean{
    return url?.includes("http");
  }
}
