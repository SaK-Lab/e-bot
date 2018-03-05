import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ThinklistComponent } from './thinklist/thinklist.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
    {
        path: '',
        component: ThinklistComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'chat',
        component: ChatComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
