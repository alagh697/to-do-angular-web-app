import { Component } from '@angular/core';
import { ProductListItem } from '../product-list-item/product-list-item';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ ProductListItem ],
  templateUrl: './product-list.html',
})
export class ProductList {
  products: Product[] = [
    { id: 0, name: 'stylo', price: 2.5, rating:0, stock: 125, added: new Date(2025, 7, 10) },
    { id: 1, name: 'cahier', price: 4.99, rating:0, stock: 0, added: new Date(2025, 7, 12) },
    { id: 2, name: 'sac à dos', price: 39.95, rating:0, stock: 42, added: new Date(2025, 7, 15) }
  ];

  cart: Product[] = [];

  addProductToCart(product: Product){
    this.cart.push(product)
    console.log(this.cart)
  }
}
