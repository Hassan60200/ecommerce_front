import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logout() {
    return localStorage.removeItem('token');
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false

  }
}
