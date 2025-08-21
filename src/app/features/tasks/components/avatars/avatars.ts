import { Component } from '@angular/core';
import { AvatarItem } from '../avatar-item/avatar-item';

@Component({
  selector: 'app-avatars',
  imports: [AvatarItem],
  templateUrl: './avatars.html',
  styleUrl: './avatars.css'
})
export class Avatars {
members=[ 1, 2, 3, 4, 5 , 6]
}
