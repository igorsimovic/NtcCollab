import { Component } from '@angular/core';
import { AuthService } from './../../auth/auth.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginUser } from '../../classes/user';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html'
})
export class LoginComponent {
  private loginUser: LoginUser = {
    id: null,
    name: null,
    email: 'simovic51@gmail.com',
    password: 'bondJbond123!'
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit(f: NgForm) {

    this.authService.login(this.loginUser)
      .subscribe(token => {
        localStorage.setItem('access_token', token);
        this.router.navigate(['']);
      });
  }
}
