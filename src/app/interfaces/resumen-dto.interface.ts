import { Pago } from "./pago.interface";
import { Factura } from "./servicio.interface";

export interface ResumenDto {
    facturasPagadas: Factura[];
    facturasImpagas: Factura[];
    pagosPagados:    Pago[];
}
