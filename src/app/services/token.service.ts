import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor() {}
  saveToken(token: string) {
    console.log('token :{}', token);
    localStorage.setItem('expireTime', token);
  }
  getToken(): string | null {
    return localStorage.getItem('expireTime');
  }
  signOut() {
    localStorage.removeItem('expireTime');
  }
}
