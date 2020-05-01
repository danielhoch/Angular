import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from './../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root' //Unica instancia para a aplicação inteira
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private userService: UserService) { }

  authenticate(userName: string, password: string) {
    return this.httpClient.post(API_URL + '/user/login',
    { userName, password },
    { observe: 'response' })
    .pipe(tap(res => {
      const authToken = res.headers.get('x-access-token');
      this.userService.setToken(authToken);
      console.log(`User ${userName} authenticated with token ${authToken}`);
    }));
  }
}