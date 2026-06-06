import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Footer } from './components/footer/footer';
import { Characters } from './pages/characters/characters';
import { Description } from './components/description/description';
import { Powers } from './components/powers/powers';

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
  {
    path: 'footer',
    component: Footer,
  },
  {
    path: 'desc',
    component: Description,
  },
  {
    path: 'powers',
    component: Powers,
  },
];
