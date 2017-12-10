import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { ExercisesComponent } from "./exercises.component"
import { ExerciseService } from "./exercises.service"


const exercisesRoutes: Routes = [

];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ExercisesComponent
    ],
    providers: [
        ExerciseService
    ]
})
export class ExercisesModule { }