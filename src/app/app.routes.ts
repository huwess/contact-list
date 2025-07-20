import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        children: [
            {
                path: 'contact-list-table',
                loadComponent: () => import('./home/contact-list/contact-list-table/contact-list-table.component').then(m => m.ContactListTableComponent)
            },
            {
                path: 'contact-info/:id',
                loadComponent: () => import('./home/contact-list/contact-information/contact-information.component').then(m => m.ContactInformationComponent)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, 
    {
        path: 'contact-info/:id',
        loadComponent: () => import('./home/contact-list/contact-information/contact-information.component').then(m => m.ContactInformationComponent)
    }
];
