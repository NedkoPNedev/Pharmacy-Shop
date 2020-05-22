import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {GlobalConstants} from '../shared/constants';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PharmclassDetailsService {

    private pharmQuestionsState$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

    private pharmClassQuestionsUrl = GlobalConstants.API_URL + '/pharmclass-questions';

    constructor(private http: HttpClient) { }

    getPharmClassQuestions(): Observable<string[]> {
      return this.http.get<string[]>(this.pharmClassQuestionsUrl)
        .pipe(tap((questions: string[]) => this.pharmQuestionsState$.next(questions)));
    }

    getPharmQuestionsState$() : Observable<string[]> {
      return this.pharmQuestionsState$.asObservable();
    }
}
