import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { DataSourceProduct } from './data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  productsDataSource = new DataSourceProduct();
  columns: string[] = ['#No', 'Name', 'Price', 'Cover', 'Actions'];

  get total(): number {
    return this.productsDataSource.getTotal();
  }

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get<Product[]>(' https://api.escuelajs.co/api/v1/products')
      .subscribe((products) => this.productsDataSource.init(products));
  }

  update(product: Product): void {
    this.productsDataSource.update(product.id, { price: 20 });
  }
}
