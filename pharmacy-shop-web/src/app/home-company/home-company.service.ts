import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeCompanyService {

  private companyNamesUrl = 'http://localhost:8085/pharm-company-names';

  constructor(private http: HttpClient) { }

  getCompanyNames(): Observable<HttpResponse<string[]>> {
      return this.http.get<string[]>(this.companyNamesUrl, {observe : 'response'});
  }
}
