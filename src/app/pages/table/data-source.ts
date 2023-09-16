import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/product.model';

export class DataSourceProduct extends DataSource<Product> {
  private _data = new BehaviorSubject<Product[]>([]);
  private _originalData: Product[] = [];

  init(products: Product[]): void {
    this._originalData = products;
    this._data.next(products);
  }

  getTotal(): number {
    const products = this._data.getValue();
    return products
      .map((item) => item.price)
      .reduce((acc, price) => acc + price, 0);
  }

  update(id: Product['id'], changes: Partial<Product>): void {
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

  find(query: string): void {
    const filteredProducts = this._originalData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.id.toString().includes(query) ||
        item.price.toString().includes(query)
    );
    this._data.next(filteredProducts);
  }

  override connect(): Observable<readonly Product[]> {
    return this._data;
  }

  override disconnect(): void {}
}
