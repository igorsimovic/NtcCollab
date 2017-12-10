import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AppComponent } from './app.component';
import { StarterViewComponent } from "./components/starter/starterview.component";

// App views
import { LayoutsModule } from "./components/common/layouts/layouts.module";
import { AccountModule } from "./account/account.module";
import { ExercisesModule } from "./exercises/exercises.module";
import { DashboardsModule } from "./views/dashboards/dashboards.module";

import { ModalModule } from 'ngx-bootstrap/modal';

// Auth
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
    StarterViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule,
    /// my modules
    LayoutsModule,
    AccountModule,
    ExercisesModule,
    DashboardsModule,
    /// end of my modules
    ModalModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:4200']
      }
    })
  ],
  providers: [AuthService, AuthGuard, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }

