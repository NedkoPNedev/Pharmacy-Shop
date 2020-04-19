import { Component, OnInit } from '@angular/core';
import {PharmclassDetailsService} from './pharmclass-details.service';

@Component({
  selector: 'app-pharmclass-details',
  templateUrl: './pharmclass-details.component.html',
  styleUrls: ['./pharmclass-details.component.css']
})
export class PharmclassDetailsComponent implements OnInit {

    pharmClassQuestions: string[];

    constructor(private pharmclassDetailsService: PharmclassDetailsService) { }

    ngOnInit(): void {
        this.pharmclassDetailsService.getPharmClassQuestions()
          .subscribe(res => { console.log(res); this.pharmClassQuestions = res.body; });
    }
}
