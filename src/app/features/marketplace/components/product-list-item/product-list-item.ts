import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import type { Product } from '../../models/product'
import { Rating } from '../rating/rating';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [CommonModule, Rating],
  templateUrl: './product-list-item.html',
})
export class ProductListItem {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter<Product>();


  // Chaque carte gère sa propre note locale
  // productRating = 0;

  add() {
    this.addToCart.emit(this.product);
  }

}
