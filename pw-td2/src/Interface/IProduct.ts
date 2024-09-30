 export interface IProduct {
    id: string;
    name: string;
    unitPrice: number;
    quantity: number;
    getPrice(): number;
  }

