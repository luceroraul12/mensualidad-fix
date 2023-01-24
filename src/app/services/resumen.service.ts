import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PagoDto } from '../interfaces/pago.interface';
import { ResumenDto } from '../interfaces/resumen-dto.interface';
import { ResumenRespuesta } from '../interfaces/resumen-respuesta.interface';
import { FacturaDto } from '../interfaces/servicio.interface';

@Injectable({
  providedIn: 'root'
})
export class ResumenService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerResumenMesAnio(mes:number, anio: number): Observable<ResumenDto>{
    let params: HttpParams = new HttpParams()
                                .set("mes", mes)
                                .set("anio",anio);

    return this.http.get<ResumenDto>(`${environment.urlApi}/resumen`,{params});
  }

 //////////////////////////////////////////////// //
  verificarExistenciaFacturaAgregar(pago: PagoDto, facturas: FacturaDto[]): FacturaDto[]{
    let resultado: FacturaDto[] = [];
    let estaContenido: boolean = false;

    // facturas.forEach(({id}) => {
    //   if(id == pago.idFactura){
    //     estaContenido = true;
    //   }
    // });

    // if(estaContenido){
    //   resultado = facturas.filter( ({id}) => id != pago.idFactura);
    // } else {
    //   resultado = [... facturas, pago.factura];
    // }
    return resultado;
  }

}
