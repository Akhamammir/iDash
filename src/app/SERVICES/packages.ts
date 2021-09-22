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
export interface getPackages {
  id: String
  country_org: String
  country_dest: String
  wt: String
  size: size
  recieved: String
  type: String
  tracking: String
  recieve: String
  desc: String
  sender: String
}
export interface size {
  ig: Number
  wd: Number
  ht: Number
}
