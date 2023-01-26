import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UsuarioDto } from '../interfaces/usuarioDto.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioComunicacionService {
  public comunicador$: Subject<UsuarioDto>  = new Subject();

  constructor() { }
}
