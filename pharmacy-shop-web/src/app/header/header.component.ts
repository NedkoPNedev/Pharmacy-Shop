import { Component, OnInit } from '@angular/core';
import {HeaderService} from './header.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    pharmClassQuestions$: Observable<string[]>;

    constructor(private headerService: HeaderService) { }

    ngOnInit(): void {
        this.pharmClassQuestions$ = this.headerService.getAllPharmClassQuestions();
    }
}
