import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/product.model';

export class DataSourceProduct extends DataSource<Product> {
  private _data = new BehaviorSubject<Product[]>([]);

  init(products: Product[]): void {
    this._data.next(products);
  }

  getTotal(): number {
    const products = this._data.getValue();
    return products
      .map((item) => item.price)
      .reduce((acc, price) => acc + price);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this._data.getValue();
    const productIndex = products.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...changes,
      };
      this._data.next(products);
    }
  }

  override connect(): Observable<readonly Product[]> {
    return this._data;
  }

  override disconnect(): void {}
}
