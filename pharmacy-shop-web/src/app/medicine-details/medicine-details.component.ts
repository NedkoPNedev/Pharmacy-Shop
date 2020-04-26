import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MedicineDetailsService} from './medicine-details.service';
import {IMedicine} from '../model/medicine.model';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {

    question: string;
    medicines: IMedicine[];

    constructor(private router: ActivatedRoute, private medicineDetailsService: MedicineDetailsService) { }

    ngOnInit(): void {
      this.router.paramMap.subscribe(
        params => {
          this.question = params.get('question');
          this.medicineDetailsService.getAllMedicinesForGivenQuestion(this.question)
            .subscribe(res => {console.log(res); this.medicines = res.body});
        });
    }
}
