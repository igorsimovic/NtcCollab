import { Routes } from "@angular/router";

import { Dashboard1Component } from "./../views/dashboards/dashboard1.component";
import { Dashboard2Component } from "./../views/dashboards/dashboard2.component";
import { Dashboard3Component } from "./../views/dashboards/dashboard3.component";
import { Dashboard4Component } from "./../views/dashboards/dashboard4.component";
import { Dashboard41Component } from "./../views/dashboards/dashboard41.component";
import { Dashboard5Component } from "./../views/dashboards/dashboard5.component";

import { StarterViewComponent } from "./../components/starter/starterview.component";
import { LoginComponent } from "./../account/login/login.component";

import { BlankLayoutComponent } from "./../components/common/layouts/blankLayout.component";
import { BasicLayoutComponent } from "./../components/common/layouts/basicLayout.component";
import { TopNavigationLayoutComponent } from "./../components/common/layouts/topNavigationlayout.component";

import { ExercisesComponent } from "./../exercises/exercises.component"

import { AuthGuard } from "./../auth/guards/auth.guard"
import { AuthService } from "./../auth/auth.service"
import { AccountComponent } from "app/account/account.component";
import { RegisterComponent } from "app/account/register/register.component";

export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'starterview', pathMatch: 'full' },
  // Login routes
  {
    path: '', component: BlankLayoutComponent,
    children: [
      {
        path: '', component: AccountComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent  },
        ]
      },
    ],
    resolve: [AuthService]
  },
  // App routes
  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: 'starterview', component: StarterViewComponent },
      { path: 'exercises', component: ExercisesComponent }
    ],
    canActivate: [AuthGuard]
  },
  // Theme demo routes
  {
    path: 'dashboards', component: BasicLayoutComponent,
    children: [
      { path: 'dashboard1', component: Dashboard1Component },
      { path: 'dashboard2', component: Dashboard2Component },
      { path: 'dashboard3', component: Dashboard3Component },
      { path: 'dashboard4', component: Dashboard4Component },
      { path: 'dashboard5', component: Dashboard5Component }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboards', component: TopNavigationLayoutComponent,
    children: [
      { path: 'dashboard41', component: Dashboard41Component }
    ],
    canActivate: [AuthGuard]
  },
  // Handle all other routes
  { path: '**', redirectTo: 'starterview' }
];
