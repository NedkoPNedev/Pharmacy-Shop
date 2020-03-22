import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {ISample} from './model/sample.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private resourceUrl = 'http://localhost:8085/sample';

  constructor(private http: HttpClient) { }

  fetchInfo(): Observable<HttpResponse<ISample>> {
    return this.http.get<ISample>(this.resourceUrl, {observe : 'response'});
  }
}
