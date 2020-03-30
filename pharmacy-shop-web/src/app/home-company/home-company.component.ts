import { Component, OnInit } from '@angular/core';
import {HomeCompanyService} from './home-company.service';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {

    companyNames: string[];

    constructor(private homeCompanyService: HomeCompanyService) { }

    ngOnInit(): void {
        this.homeCompanyService.getCompanyNames()
          .subscribe(res => {
            console.log(res);
            this.companyNames = res.body;
          });
        console.log(this.companyNames);
    }

    showCompanyDetails(companyName: string) {
      this.homeCompanyService.getCompanyInfo(companyName).subscribe(res => console.log(res.body));
    }
}
