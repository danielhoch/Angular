import { NgModule } from '@angular/core';
import { SingInComponent } from './singin/singin.component';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SingUpComponent } from './singup/singup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SingUpService } from './singup/singup.service';

@NgModule({
    declarations: [
        SingInComponent,
        SingUpComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        SingUpService
    ]
})
export class HomeModule { }
