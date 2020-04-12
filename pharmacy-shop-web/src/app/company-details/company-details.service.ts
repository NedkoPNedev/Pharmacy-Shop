import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICompany} from '../model/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {

  private companyInfoUrl = 'http://localhost:8085/company-info/';

  constructor(private http: HttpClient) { }

  getCompanyInfo(companyName: string): Observable<HttpResponse<ICompany>> {
    return this.http.get<ICompany>(
      this.companyInfoUrl + companyName, {observe: 'response'});
  }
}
