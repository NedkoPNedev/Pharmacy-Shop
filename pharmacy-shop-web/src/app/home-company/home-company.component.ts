import { Component, OnInit } from '@angular/core';
import {HomeCompanyService} from './home-company.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {

    companyNames$ : Observable<string[]>;

    constructor(private homeCompanyService: HomeCompanyService, private router: Router) { }

    ngOnInit(): void {
        this.companyNames$ = this.homeCompanyService.getCompanyNames();
    }

    navigateToCompanyDetails(companyName: string) {
      this.router.navigate(['company-details/' + companyName]);
    }

    navigateToPharmClassDetails() {
        this.router.navigate(['pharmclass-details']);
    }
}
