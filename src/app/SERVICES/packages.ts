export interface Package {
  nameCustomer: string
  codeCustomer: string
  Destino: string
  guiaReferencia: string
  proveedor: string
  tipoValija: string
  amount: string
  description: string
  tipoContenido: string
  countryOrigen: string
  marca: string
  model: string
  valor: string
  weight: string
  currentWeight: string
  length: string
  width: string
  totalWeight: string
  impuesto?: number
  tramiteAduanal?: number
  manejoEnvio?: number
  seguro?: number
  total?: number
}
export interface ListPackage {
  packages: [
    Package
  ]
}
