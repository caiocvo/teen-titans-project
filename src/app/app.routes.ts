import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Characters } from './pages/characters/characters';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'characters',
    component: Characters,
  },
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full',
  },
];
