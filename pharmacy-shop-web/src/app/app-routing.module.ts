import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyDetailsComponent} from './company-details/company-details.component';
import {HomeCompanyComponent} from './home-company/home-company.component';

const routes: Routes = [
  {
    path: 'company-details/:name',
    component: CompanyDetailsComponent
  },
  {
    path: 'companies-home',
    component: HomeCompanyComponent
  },
  {
    path: '',
    redirectTo: '/companies-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
