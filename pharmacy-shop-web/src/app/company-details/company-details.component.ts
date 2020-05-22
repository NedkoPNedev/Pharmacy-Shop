import { Component, OnInit } from '@angular/core';
import {CompanyDetailsService} from './company-details.service';
import {ICompany} from '../shared/model/company.model';
import {ActivatedRoute} from '@angular/router';
import {IPharmClass} from '../shared/model/pharm-class.model';
import {IMedicine} from '../shared/model/medicine.model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

    ALL_MEDICINE =  '-всички-';
    company: ICompany;
    medicines: IMedicine[];
    showMedicines: boolean;

    constructor(private companyDetailsService: CompanyDetailsService, private router: ActivatedRoute) { }

    ngOnInit(): void {
      const companyName: string = this.router.snapshot.params.name;

      this.companyDetailsService.getCompanyInfo(companyName).subscribe(
        res => {
          console.log(res);
          this.company = res;
          this.filterMedicines({ target: { value: this.ALL_MEDICINE} });
        });
    }

    filterMedicines(event: any) {
      const pharmClassDescription: string = event.target.value;

      this.showMedicines = true;
      this.medicines = [];

      if (pharmClassDescription.length === 0) {
        this.showMedicines = false;
      } else if (pharmClassDescription === this.ALL_MEDICINE) {
        this.company.pharmClasses.forEach(phClass => {
          phClass.medicines.forEach(medicine => this.medicines?.push(medicine));
        });
      } else {
        const selectedClass: IPharmClass =
          this.company.pharmClasses.filter(phClass => phClass.classDescription === pharmClassDescription)[0];

        selectedClass?.medicines.forEach(medicine => this.medicines?.push(medicine));
      }
    }
}
