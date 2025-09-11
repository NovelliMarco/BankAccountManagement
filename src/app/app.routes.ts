import { Routes } from '@angular/router';

const siteName: string = 'Bank ‣';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login),
    pathMatch: 'full',
    title: `${siteName} Login`,
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    pathMatch: 'full',
    title: `${siteName} Home`,
  },
  {
    path: 'my-card',
    loadComponent: () => import('./pages/card-detail/card-detail').then(m => m.CardDetail),
    pathMatch: 'full',
    title: `${siteName} Card`,
  },
  {
    path: 'card-detail-block',
    loadComponent: () => import('./pages/card-detail/block/card-detail-block').then(m => m.BloccaCarta),
    pathMatch: 'full',
    title: `${siteName} Blocca Carta`,
  },
  {
    path: 'card-detail-limit',
    loadComponent: () => import('./pages/card-detail/limit/card-detail-limit').then(m => m.ImpostaLimite),
    pathMatch: 'full',
    title: `${siteName} Imposta Limite`,
  },
  {
    path: 'card-detail-transaction',
    loadComponent: () => import('./pages/card-detail/transactions/card-detail-transaction').then(m => m.Transazioni),
    pathMatch: 'full',
    title: `${siteName} Transazioni`,
  },
  {
    path: 'my-profile',
    loadComponent: () => import('./pages/user-profile/user-profile').then(m => m.UserProfile),
    pathMatch: 'full',
    title: `${siteName} Profile`,
  },
  {
    path: 'my-profile-edit',
    loadComponent: () => import('./pages/user-profile/edit/user-profile-edit').then(m => m.UserProfileEdit),
    pathMatch: 'full',
    title: `${siteName} Edit Profile`,
  },
  {
    path: 'support',
    loadComponent: () => import('./pages/support/support').then(m => m.Support),
    pathMatch: 'full',
    title: `${siteName} Support`,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
