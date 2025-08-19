import { Routes } from '@angular/router';
import { HomePage } from './features/home/home';
import { TasksPage } from './features/tasks/tasks';
import { BindingPage } from './features/binding/binding';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Home' },
  { path: 'tasks', component: TasksPage, title: 'Tâches' },
  { path: 'binding', component: BindingPage, title: 'Exo Binding' },
  { path: '**', redirectTo: '' },
];
