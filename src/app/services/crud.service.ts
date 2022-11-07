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

  agregar(elemento: Entidad): Observable<Entidad>{
    console.log(elemento);
    
    return this.http.post<Entidad>(`${this.url}/${this.rutaEspecifica}/crear`, elemento);
  }
  modificar(elemento: Entidad): Observable<Entidad>{
    return this.http.put<Entidad>(`${this.url}/${this.rutaEspecifica}/modificar`, {body: elemento});
  }
  eliminar(elemento: Entidad): Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}/${this.rutaEspecifica}/eliminar`, {body: elemento});
  }
  leer(): Observable<Entidad[]>{
    return this.http.get<Entidad[]>(`${this.url}/${this.rutaEspecifica}/leer`);
  }


}
