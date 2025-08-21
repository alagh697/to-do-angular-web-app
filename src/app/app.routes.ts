import { Routes } from '@angular/router';
import { HomePage } from './features/home/home';
import { TasksPage } from './features/tasks/tasks';
import { BindingPage } from './features/binding/binding';
import { AgencyPage } from './features/agency/agency';
import { MarketplacePage } from './features/marketplace/marketplace';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Home' },
  { path: 'tasks', component: TasksPage, title: 'Tâches' },
  { path: 'binding', component: BindingPage, title: 'Binding' },
  { path: 'marketplace', component: MarketplacePage, title: 'Mini-Marketplace' },
  { path: 'agency', component: AgencyPage, title: 'Agency' },
  { path: '**', redirectTo: '' },
];
