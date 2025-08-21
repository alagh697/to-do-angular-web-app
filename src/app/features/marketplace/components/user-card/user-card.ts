import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input() firstName!: string;

  @Input() grade!: number;

  @Output() liked = new EventEmitter<void>()

  status: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['grade']) {
      //  this.status = changes['grade'].currentValue  >= 10 ? 'Admis' : 'Rattrapage'
      this.status = this.grade >= 10 ? 'Admis' : 'Rattrapage';
    }
  }

  like(){
    this.liked.emit()
  }
}
