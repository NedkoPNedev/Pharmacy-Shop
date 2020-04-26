import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMedicine} from '../model/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineDetailsService {

    private medicinesUrl = 'http://localhost:8085/medicines/';

    constructor(private http: HttpClient) { }

    getAllMedicinesForGivenQuestion(question: string) : Observable<HttpResponse<IMedicine[]>> {
        return this.http.get<IMedicine[]>(this.medicinesUrl + question, {observe: 'response'});
    }
}
