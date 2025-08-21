import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Nav } from '../nav/nav';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterLink, Nav],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class HeaderComponent {}
