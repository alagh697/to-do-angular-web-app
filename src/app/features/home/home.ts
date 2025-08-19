import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UiCardComponent } from '../../shared/ui/card/card';
import { UiButtonComponent } from '../../shared/ui/button/button';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [UiCardComponent, UiButtonComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomePage {
  constructor(private router: Router) {}
  goToTasks() { 
    this.router.navigateByUrl('/tasks'); 
  }
}
