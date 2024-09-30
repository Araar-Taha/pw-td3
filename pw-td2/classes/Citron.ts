// src/classes/Citron.ts
import IProduct from "../src/Interface/IProduct";
import { v4 as uuidv4 } from "uuid";

export class Citron implements IProduct {
  id: string;
  name: string = "Citron";
  unitPrice: number;
  quantity: number;

  constructor(unitPrice: number, quantity: number) {
    this.id = uuidv4();
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }

  getPrice(): number {
    return this.unitPrice * this.quantity+  " $";
  }
}

