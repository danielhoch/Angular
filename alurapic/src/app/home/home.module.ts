import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignInComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';

import { VMessageModule } from './../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [
      SignInComponent,
      SignupComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule
  ]
})

export class HomeModule{}
