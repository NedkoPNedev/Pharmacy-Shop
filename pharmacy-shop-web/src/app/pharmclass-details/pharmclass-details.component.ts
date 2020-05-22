import {Component, OnDestroy, OnInit} from '@angular/core';
import {PharmclassDetailsService} from './pharmclass-details.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pharmclass-details',
  templateUrl: './pharmclass-details.component.html',
  styleUrls: ['./pharmclass-details.component.css']
})
export class PharmclassDetailsComponent implements OnInit {

    pharmClassQuestions$: Observable<string[]>;

    constructor(private pharmclassDetailsService: PharmclassDetailsService, private router: Router) { }

    ngOnInit(): void {
        this.pharmClassQuestions$ = this.pharmclassDetailsService.getPharmQuestionsState$();

        let questions: string[] = [];
        this.pharmClassQuestions$.subscribe(response => questions = response);

        if (questions.length === 0) {
          this.pharmClassQuestions$ = this.pharmclassDetailsService.getPharmClassQuestions();
        }
    }

    navigateToMedicinesDetails(question: string) {
        this.router.navigate(['medicines/' + question]);
    }
}

