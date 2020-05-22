import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MedicineDetailsService} from './medicine-details.service';
import {IMedicine} from '../shared/model/medicine.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {

    question: string;
    medicines$: Observable<IMedicine[]>;

    constructor(private router: ActivatedRoute, private medicineDetailsService: MedicineDetailsService) { }

    ngOnInit(): void {
      this.question = this.router.snapshot.params.question;
      this.medicines$ = this.medicineDetailsService.getAllMedicinesForGivenQuestion(this.question);
    }

  getMedicinesAgainstTitle(question: string) {
    return (question.includes('слаб имунитет')) ? 'Хранителни добавки' : 'Лекарства против ' + question;
  }
}
