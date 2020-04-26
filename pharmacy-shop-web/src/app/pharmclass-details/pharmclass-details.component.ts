import { Component, OnInit } from '@angular/core';
import {PharmclassDetailsService} from './pharmclass-details.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pharmclass-details',
  templateUrl: './pharmclass-details.component.html',
  styleUrls: ['./pharmclass-details.component.css']
})
export class PharmclassDetailsComponent implements OnInit {

    pharmClassQuestions: string[];

    constructor(private pharmclassDetailsService: PharmclassDetailsService, private router: Router) { }

    ngOnInit(): void {
        this.pharmclassDetailsService.getPharmClassQuestions()
          .subscribe(res => { console.log(res); this.pharmClassQuestions = res.body; });
    }

    navigateToMedicinesDetails(question: string) {
        this.router.navigate(['medicines/' + question]);
    }
}
