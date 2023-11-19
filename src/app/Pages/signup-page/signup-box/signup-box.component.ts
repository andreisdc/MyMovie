// signup-box.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service'; // Ajustează calea
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-box',
  templateUrl: './signup-box.component.html',
  styleUrls: ['./signup-box.component.scss']
})
export class SignupBoxComponent implements OnInit {
 
  signupForm!: FormGroup;
  constructor(private userService: UserService, private router: Router) { }
  users:any[] = [];
  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  deleteSubmit() {
    this.userService.deleteStorage();
  }

  onSubmit() {
    this.signupForm.markAllAsTouched();
  
    if (this.signupForm.valid) {
      const newUser = {
        id: this.userService.getUserLength() + 1,
        username: this.signupForm.get('username')?.value,
        email: this.signupForm.get('email')?.value,
        password: this.signupForm.get('password')?.value,
        admin: false,
      };
  
      this.userService.getUserData().subscribe((userData) => {
        userData.users.push(newUser);

        this.userService.postUserData(userData).subscribe((response) => {
          console.log('Utilizator adăugat cu succes:', response);
        });
      });

      this.router.navigate(['/login']);
    }
  }
}
