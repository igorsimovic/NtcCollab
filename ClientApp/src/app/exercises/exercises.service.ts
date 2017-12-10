import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Exercise } from './exercise';
import { EXERCISES } from './mock-excercises'


@Injectable()
export class ExerciseService {
    private valuesUrl = 'api/exercises';
    constructor(private http: HttpClient) { }

    getExercises(): Observable<Exercise[]> {
        return this.http.get<Exercise[]>(this.valuesUrl)
    }
}

