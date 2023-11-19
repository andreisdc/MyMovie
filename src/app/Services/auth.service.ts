import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private userService: UserService) { }

  private authenticated = false;
  private authTokenKey = 'authToken';
  private userKey : number = 0;

  login(id: number) {
    this.authenticated = true;
    const authToken = 'your_generated_token';
    localStorage.setItem(this.authTokenKey, authToken);
    this.userKey = id;
    localStorage.setItem('userKey', this.userKey.toString());
    localStorage.setItem('admin', this.userService.getAdminValue(this.userKey).toString());
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem(this.authTokenKey);

  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }
}
