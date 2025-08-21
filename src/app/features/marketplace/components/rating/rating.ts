import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports:[],
  templateUrl: './rating.html',
  styleUrl: './rating.css'
})
export class Rating {
  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();

  setRating(star: number) {
    this.ratingChange.emit(star);
  }
}
