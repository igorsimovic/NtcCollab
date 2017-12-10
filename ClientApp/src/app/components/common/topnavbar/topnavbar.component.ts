import { Component } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
import { AuthService } from './../../../auth/auth.service';
import { AuthGuard } from 'app/auth/guards/auth.guard';

declare var jQuery:any;

@Component({
  selector: 'topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopNavbarComponent {
  constructor(private authService: AuthService){
  }

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }

  onLogOutClick(): void{
    this.authService.logout();
  }

}
