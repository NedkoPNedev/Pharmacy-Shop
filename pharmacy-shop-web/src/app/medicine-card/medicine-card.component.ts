import {Component, Input, OnInit} from '@angular/core';
import {IMedicine} from '../model/medicine.model';

@Component({
  selector: 'app-medicine-card',
  templateUrl: './medicine-card.component.html',
  styleUrls: ['./medicine-card.component.css']
})
export class MedicineCardComponent implements OnInit {

    @Input() medicine: IMedicine;

    constructor() { }

    ngOnInit(): void {
    }
}
