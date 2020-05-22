import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMedicine} from '../shared/model/medicine.model';
import {GlobalConstants} from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class MedicineDetailsService {

    private medicinesUrl = GlobalConstants.API_URL + 'medicines/';

    constructor(private http: HttpClient) { }

    getAllMedicinesForGivenQuestion(question: string) : Observable<IMedicine[]> {
        return this.http.get<IMedicine[]>(this.medicinesUrl + question);
    }
}
