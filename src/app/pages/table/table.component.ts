import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  products: Product[] = [];
  columns: string[] = ['#No', 'Name', 'Price', 'Cover'];

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get<Product[]>(' https://api.escuelajs.co/api/v1/products')
      .subscribe((products) => (this.products = products));
  }
}
