import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
})
export class ScrollComponent implements OnInit {
  products: Product[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get<Product[]>(' https://api.escuelajs.co/api/v1/products')
      .subscribe((products) => (this.products = products));
  }
}
