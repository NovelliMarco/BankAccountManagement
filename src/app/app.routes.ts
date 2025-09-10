import { RouterOutlet, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CardDetail } from './pages/card-detail/card-detail';
import { UserProfile } from './pages/user-profile/user-profile';
import { Support } from './pages/support/support';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    pathMatch: 'full',
  },
  {
    path: 'my-card',
    loadComponent: () => import('./pages/card-detail/card-detail').then((m) => m.CardDetail),
    pathMatch: 'full',
  },
  {
    path: 'my-profile',
    loadComponent: () => import('./pages/user-profile/user-profile').then((m) => m.UserProfile),
    pathMatch: 'full',
  },
  {
    path: 'support',
    loadComponent: () => import('./pages/support/support').then((m) => m.Support),
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
