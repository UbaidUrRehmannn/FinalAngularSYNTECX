import { CanActivate } from '@angular/router';

export class LoginGuard implements CanActivate {
  constructor() {}
  canActivate(): boolean {
    if (localStorage.getItem('Token') !== null) {
      return true;
    } else return false;
  }
}
