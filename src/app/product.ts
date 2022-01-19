export interface Product {
  id?: string;
  code?: string;
  name?: string;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  description?: string;
  price?: number;
  activity?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
  namerepresentative?: string;
  representative?: Representative;
}
export interface Representative {
  name: string;
  image?: string;
}
export interface Country {
  name?: string;
  code?: string;
}
