import { Component, OnInit, TemplateRef } from '@angular/core';
import { Exercise, ExcerciseLevel } from './exercise'

import { ExerciseService } from './exercises.service'

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
    selector: 'exercises',
    templateUrl: './exercises.component.html',
    styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
    exercises: Exercise[] = [];
    level = ExcerciseLevel;
    public modalRef: BsModalRef;
    constructor(private exerciseService: ExerciseService, private modalService: BsModalService) {
    }

    ngOnInit() {
        this.getExercises();
    }

    onAddClick(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    getExercises(): void {
        this.exerciseService.getExercises()
            .subscribe(exercises => {
                console.log('EXERCISES: ', exercises);
                this.exercises = exercises;
            });
    }
}


