import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.html',
  styleUrl: './binding.css',
})
export class BindingPage {
  firstName = 'Alaaeddine';

  today = new Date().getFullYear();

  // exo 2
  imageUrl = '/images/mosque.png';

  changeImage() {
    this.imageUrl = '/images/mosque.jpg';
  }

  // exo 3
  clicks = 0;
  lastKey = '';

  increment() {
    this.clicks++;
  }

  onKey(event: KeyboardEvent) {
    this.lastKey = event.key;
  }

  // exo 4
  message = '';

  // exo 5
  fusion = false;

  toggleFusion() {
    this.fusion = !this.fusion;
  }

  //exo6
  isActive = false;
  activeIndex: number | null = null;

  items = ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan'];

  toggleActive() {
    this.isActive = !this.isActive;
  }

  highlightItem(index: number) {
    this.activeIndex = index;
  }

  // exo7
  progress = 30;

  updateProgress(value: number) {
    this.progress = this.progress + value;
  }
}
