import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICompany} from '../model/company.model';

@Injectable({
  providedIn: 'root'
})
export class HomeCompanyService {

  private companyNamesUrl = 'http://localhost:8085/pharm-company-names';
  private companyInfoUrl = 'http://localhost:8085/company-info/';

  constructor(private http: HttpClient) { }

  getCompanyNames(): Observable<HttpResponse<string[]>> {
      return this.http.get<string[]>(this.companyNamesUrl, {observe : 'response'});
  }

  getCompanyInfo(companyName: string): Observable<HttpResponse<ICompany>> {
      return this.http.get<ICompany>(
        this.companyInfoUrl + companyName, {observe: 'response'});
  }
}
