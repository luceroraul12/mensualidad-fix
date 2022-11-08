import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResumenRespuesta } from '../interfaces/resumen-respuesta.interface';

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
}
