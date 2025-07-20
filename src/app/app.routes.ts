import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, 
    {
        path: 'contact-info/:id',
        loadComponent: () => import('./home/contact-list/contact-information/contact-information.component').then(m => m.ContactInformationComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
