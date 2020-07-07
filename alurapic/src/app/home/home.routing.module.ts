import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginGuard } from './../core/auth/login.guard';
import { SingInComponent } from './singin/singin.component';
import { SingUpComponent } from './singup/singup.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: SingInComponent,
            },
            {
                path: 'signup',
                component: SingUpComponent,
            },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

