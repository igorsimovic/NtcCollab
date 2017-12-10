import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from '@angular/forms';

import { AccountComponent } from "app/account/account.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "app/account/register/register.component";

const accountRoutes: Routes = [
  {
    // path: '', component: BlankLayoutComponent,
    // children: [
    //   { path: 'login', component: LoginComponent },
    // ],
    // resolve: [AuthService]
  },
];

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ],
})

export class AccountModule {
}
