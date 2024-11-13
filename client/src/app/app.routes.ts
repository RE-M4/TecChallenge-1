import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    {path: 'orders', component: HomeComponent},
    {path: 'form', component: FormComponent},
    {path: 'form/:id', component: FormComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'orders'}
];
