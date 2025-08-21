import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-item',
  imports: [],
  templateUrl: './avatar-item.html',
  styleUrl: './avatar-item.css'
})
export class AvatarItem {
@Input() imageUrl!: string
}
