import { Factura } from "./servicio.interface";

export interface Pago {
    id: number;
    fechaPago: Date;
    pago: number;
    factura: Factura;
}