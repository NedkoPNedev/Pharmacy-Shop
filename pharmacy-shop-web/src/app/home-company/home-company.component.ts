import { Component, OnInit } from '@angular/core';
import {HomeCompanyService} from './home-company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {

    companyNames: string[];

    constructor(private homeCompanyService: HomeCompanyService,
                private router: Router) { }

    ngOnInit(): void {
        this.homeCompanyService.getCompanyNames()
          .subscribe(res => {
            console.log(res);
            this.companyNames = res.body;
          });
    }

    navigateToCompanyDetails(companyName: string) {
      this.router.navigate(['company-details/' + companyName]);
    }

    navigateToPharmClassDetails() {
        this.router.navigate(['pharmclass-details']);
    }
}
