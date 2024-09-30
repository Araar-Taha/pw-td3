// src/classes/Cart.ts
import IProduct from "../src/Interface/IProduct";

export class Cart {
  orderLines: IProduct[] = [];

  add(product: IProduct): void {
    this.orderLines.push(product);
  }

  calculateAmountByProduct(product: IProduct): number {
    return product.getPrice();
  }

  calculateAmount(): number {
    return this.orderLines.reduce((total, product) => total + product.getPrice(), 0);
  }

  displayDetails(): string[] {
    return this.orderLines.map(product => {
      return `ID: ${product.id}, Nom: ${product.name}, Prix unitaire: ${product.unitPrice}, Quantité: ${product.quantity}, Montant: ${this.calculateAmountByProduct(product)}`;
    });
  }
}
