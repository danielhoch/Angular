import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective
  ],
  exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule,
    ShowIfLoggedModule
  ]

})
export class PhotoDatailsModule {}
