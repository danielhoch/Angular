import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SingUpService } from './singup.service';

import { debounceTime, switchMap, map, first, tap } from 'rxjs/operators';

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private singUpService: SingUpService) {}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName =>
                        this.singUpService.checkUserNameTaken(userName)
                ))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                .pipe(tap(r => console.log(r)))
                .pipe(first());
        }
    }
}
