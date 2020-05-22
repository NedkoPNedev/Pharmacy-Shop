import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICompany} from '../shared/model/company.model';
import {GlobalConstants} from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {

  private companyInfoUrl = GlobalConstants.API_URL + 'company-info/';

  constructor(private http: HttpClient) { }

  getCompanyInfo(companyName: string): Observable<ICompany> {
    return this.http.get<ICompany>(this.companyInfoUrl + companyName);
  }
}
