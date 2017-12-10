import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ROUTES } from "./app.routes";

//import { PageNotFoundComponent } from './not-found.component';

@NgModule({
    imports: [
      RouterModule.forRoot(
        ROUTES,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}