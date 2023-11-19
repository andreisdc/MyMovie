// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, of } from 'rxjs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private userData: any = { users: [] };

  constructor() {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      this.userData = JSON.parse(savedData);
    }
  }

  getUserData(): Observable<any> {
    return of(this.userData);
  }

  getAdminValue(userId: number): boolean {
    const user = this.userData.users.find((u: any) => u.id === userId && u.admin === true);
    if(user != null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }



  getUserLength(): number {
    return this.userData.users.length;
  }


  getByEmail(email: string, password: string): Observable<any> {
    const user = this.userData.users.find((u: any) => u.email === email && u.password === password);
    return of(user);
  }

  

  postUserData(newData: any): Observable<any> {
    this.userData = newData;
    localStorage.setItem('userData', JSON.stringify(this.userData));
    return of({ success: true });
  }

  deleteStorage(): void {
    localStorage.removeItem('userData'); 
    this.userData = { users: [] }; 
  }

  downloadUserData() {
    const blob = new Blob([JSON.stringify(this.userData)], { type: 'application/json;charset=utf-8' });
    saveAs(blob, 'user-data.json');
  }

}

