import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {
  users!: any[];
  loginForm!: FormGroup;

  constructor(private userService: UserService,private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.userService.getUserData().subscribe(
      (data) => {
        this.users = data.users; // Am modificat aici pentru a lua vectorul de utilizatori din obiectul de date
      }
    );

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      const enteredEmail = this.loginForm.get('email')?.value;
      const enteredPassword = this.loginForm.get('password')?.value;

      const foundUser = this.users.find(user => user.email === enteredEmail && user.password === enteredPassword);
      if (foundUser) {
        console.log('Autentificare reușită pentru utilizator:', foundUser);
        this.authService.login(foundUser.id);
        this.router.navigate(['/user']);
      } else {
        console.log('Autentificare eșuată. Utilizatorul nu a fost găsit sau parola este incorectă.');
      }
    }
  }
}
