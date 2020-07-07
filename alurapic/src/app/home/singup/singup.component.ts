import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SingUpService } from './singup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service';

@Component({
    templateUrl: './singup.component.html',
    providers: [ UserNotTakenValidatorService ]
})
export class SingUpComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SingUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) {}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });

        this.platformDetectorService.isPlatformBrowser() &&
            this.emailInput.nativeElement.focus();
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signUpService
            .signup(newUser)
            .subscribe(
                () => this.router.navigate(['']),
                err => console.log(err)
            );
    }
}
