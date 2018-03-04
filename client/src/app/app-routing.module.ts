import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ThingslistComponent } from './thingslist/thingslist.component';


const routes: Routes = [
    {
        path: '',
        component: ThingslistComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
