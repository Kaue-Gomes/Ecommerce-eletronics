// types.ts
export interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number; // Adiciona a propriedade 'rating'
}

export interface CartItem extends ProductType {
  quantity: number; // Adiciona a propriedade 'quantity'
}