import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalConstants} from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

    private pharmClassQuestionsUrl =  GlobalConstants.API_URL + 'pharmclass-questions/';

    constructor(private http: HttpClient) { }

    getAllPharmClassQuestions() : Observable<string[]> {
        return this.http.get<string[]>(this.pharmClassQuestionsUrl);
    }
}
