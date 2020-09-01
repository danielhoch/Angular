import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

import { AlertService } from './../../shared/components/alert/alert.service';
import { PhotoService } from '../../photos/photo/photo.service';
import { UserService } from './../../core/user/user.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;
  percentDone = 0;

  constructor(private formBuilder: FormBuilder,
              private photoService: PhotoService,
              private router: Router,
              private alertService: AlertService,
              private userServive: UserService) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    //const dados = this.photoForm.getRawValue();
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;

    this.photoService
    .upload(description, allowComments, this.file)
    .pipe(finalize(() => {
      this.router.navigate(['/user', this.userServive.getUserName()]);
    }))
    .subscribe(
      (event: HttpEvent<any>) => {
      if (event.type === HttpEventType.UploadProgress){
        this.percentDone = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse){
        this.alertService.success('Upload complete', true);
      }
    },
    err => {
      console.log(err);
      this.alertService.danger('Upload error! ', true);
    });
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }
}
