import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmclassDetailsService {

    private pharmClassQuestionsUrl = 'http://localhost:8085/pharmclass-questions';

    constructor(private http: HttpClient) { }

    getPharmClassQuestions(): Observable<HttpResponse<string[]>> {
      return this.http.get<string[]>(this.pharmClassQuestionsUrl, {observe: 'response'});
    }
}
