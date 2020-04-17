import { Component, OnInit } from '@angular/core';
import {CompanyDetailsService} from './company-details.service';
import {ICompany} from '../model/company.model';
import {ActivatedRoute} from '@angular/router';
import {IPharmClass} from '../model/pharm-class.model';
import {IMedicine} from '../model/medicine.model';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

    company: ICompany;
    medicines: IMedicine[];
    showMedicines: boolean;

    constructor(private companyDetailsService: CompanyDetailsService,
                private router: ActivatedRoute) { }

    ngOnInit(): void {
      this.showMedicines = false;
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

    filterMedicines(event: any) {
      const pharmClassDescription: string = event.target.value;

      this.showMedicines = true;
      this.medicines = [];

      if (pharmClassDescription.length === 0) {
        this.showMedicines = false;
      } else if (pharmClassDescription === '-всички-') {
        this.company.pharmClasses.forEach(phClass => {
          phClass.medicines.forEach(medicine => this.medicines?.push(medicine));
        });
      } else {
        console.log('vliza tuk : ' + pharmClassDescription);
        const selectedClass: IPharmClass =
          this.company.pharmClasses.filter(phClass => phClass.classDescription === pharmClassDescription)[0];

        console.log(selectedClass?.classDescription);
        selectedClass?.medicines.forEach(medicine => this.medicines?.push(medicine));
      }
    }
}
