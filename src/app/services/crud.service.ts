import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<Entidad>{

  public url: string = environment.urlApi;
  public abstract rutaEspecifica: string;

  constructor(
    public http: HttpClient
  ) { }

  agregar(modelo: Entidad): Observable<Entidad>{
    console.log(modelo);
    
    return this.http.post<Entidad>(`${this.url}/${this.rutaEspecifica}/crear`, modelo);
  }
  modificar(modelo: Entidad): Observable<Entidad>{
    return this.http.put<Entidad>(`${this.url}/${this.rutaEspecifica}/modificar`, modelo);
  }
  eliminar(modelo: Entidad): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}/${this.rutaEspecifica}/eliminar`, {body:modelo});
  }
  leer(): Observable<Entidad[]>{
    return this.http.get<Entidad[]>(`${this.url}/${this.rutaEspecifica}/leer`);
  }


}
