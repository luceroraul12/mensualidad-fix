import { Modelo } from "./entidad.interface";
import { Factura } from "./servicio.interface";

export interface Pago extends Modelo {
    fechaDePago: Date;
    pago?: number;
    factura: Factura;
    comentario?: string;
}