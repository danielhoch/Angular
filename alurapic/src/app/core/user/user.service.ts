import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { TokenService } from './../token/token.service';
import { User } from './../user/user';

@Injectable({ providedIn: 'root' })
export class UserService {

  // private userSubject = new Subject<User>();
  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {

   if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
   }
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();

    if (token) {
      const user = jwt_decode(token) as User;
      this.userName = user.name;
      this.userSubject.next(user);
    }
  }

  logout() {
    console.log('Encerrando sessão');
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
