import { Routes } from '@angular/router';
import { HomePage } from './features/home/home';
import { TasksPage } from './features/tasks/tasks';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Home' },
  { path: 'tasks', component: TasksPage, title: 'Tâches' },
  { path: '**', redirectTo: '' },
];
