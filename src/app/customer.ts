export interface Customer {
  servicio: string,
  destino: string
  trakingNumber: number
  id: number
  codigoCliente: number
  nombre: string
  subtotal: string
  iva: string
  totalPagar: string
}
export interface NotificationB {
  email: Boolean,
  sms: Boolean,
}
