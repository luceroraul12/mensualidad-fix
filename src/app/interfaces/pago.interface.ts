import { Factura } from "./servicio.interface";

export interface Pago {
    id?: number;
    fechaDePago: Date;
    pago?: number;
    factura: Factura;
}