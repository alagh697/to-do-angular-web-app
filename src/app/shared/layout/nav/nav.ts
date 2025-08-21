import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { routes } from '../../../app.routes';
import { NavLink } from '../nav-link/nav-link';

@Component({
  selector: 'app-nav',
  imports: [NavLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
appRoutes: Routes = routes
}
