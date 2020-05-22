import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalConstants} from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class HomeCompanyService {

  private companyNamesUrl =  GlobalConstants.API_URL + 'pharm-company-names';

  constructor(private http: HttpClient) { }

  getCompanyNames(): Observable<string[]> {
      return this.http.get<string[]>(this.companyNamesUrl);
  }
}
