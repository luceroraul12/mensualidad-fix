import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagoDto } from '../interfaces/pago.interface';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class PagoService extends CrudService<PagoDto>{
  public rutaEspecifica: string = "pagos";

  obtenerResumen(mes: number, anio: number): Observable<PagoDto[]> {
    let params: HttpParams = new HttpParams()
                      .set('mes',mes)
                      .set('anio',anio);
                      
    return this.http.post<PagoDto[]>(`${this.url}/${this.rutaEspecifica}/resumen`, params)
  }

}
