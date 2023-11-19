import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  checkAdmin() : boolean {

    if(localStorage.getItem('admin') === false.toString()) {
      return false;
    }
    else {
      return true;
    }
  }

  toAdminPage()
  {
    this.router.navigate(['/admin']);
  }

  toUserPage()
  {
    this.router.navigate(['/user']);
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userKey');
    localStorage.removeItem('admin');
  }

  buyAdmin()
  {
    localStorage.setItem('admin', true.toString());
  }

}
