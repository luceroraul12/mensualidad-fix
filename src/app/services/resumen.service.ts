import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pago } from '../interfaces/pago.interface';
import { ResumenRespuesta } from '../interfaces/resumen-respuesta.interface';
import { Factura } from '../interfaces/servicio.interface';

@Injectable({
  providedIn: 'root'
})
export class ResumenService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerResumenMesAnio(mes:number, anio: number): Observable<ResumenRespuesta>{
    let params: HttpParams = new HttpParams()
                                .set("mes", mes)
                                .set("anio",anio);

    return this.http.get<ResumenRespuesta>(`${environment.urlApi}/resumen`,{params});
  }

 //////////////////////////////////////////////// //
  verificarExistenciaFacturaAgregar(pago: Pago, facturas: Factura[]): Factura[]{
    let resultado: Factura[];
    let estaContenido: boolean = false;

    facturas.forEach(({id}) => {
      if(id == pago.factura.id){
        estaContenido = true;
      }
    });

    if(estaContenido){
      resultado = facturas.filter( ({id}) => id != pago.factura.id);
    } else {
      resultado = [... facturas, pago.factura];
    }
    return resultado;
  }
}
