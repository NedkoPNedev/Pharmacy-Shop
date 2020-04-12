import { Component, OnInit } from '@angular/core';
import {CompanyDetailsService} from './company-details.service';
import {ICompany} from '../model/company.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

    company: ICompany;

    constructor(private companyDetailsService: CompanyDetailsService,
                private router: ActivatedRoute) { }

    ngOnInit(): void {
      this.router.paramMap.subscribe(
        params => {
          const companyName: string = params.get('name');
          this.companyDetailsService.getCompanyInfo(companyName).subscribe(
            res => {
              console.log(res.body);
              this.company = res.body;
            });
      });
    }
}
