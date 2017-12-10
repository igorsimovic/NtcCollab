import { Component } from '@angular/core';
import { AuthService } from './../../auth/auth.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterUser } from '../../classes/user';

@Component({
  selector: 'register',
  templateUrl: 'register.template.html'
})
export class RegisterComponent {
  private registerUser: RegisterUser = {
    id: null,
    name: 'Igor',
    email: 'simovic51@gmail.com',
    password: 'bondJbond123!',
    confirmPassword: 'bondJbond123!'
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit(f: NgForm) {
    this.authService.register(this.registerUser)
      .subscribe(token => {
        localStorage.setItem('access_token', token);
        this.router.navigate(['']);
      });
  }
}
