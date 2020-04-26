import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyDetailsComponent} from './company-details/company-details.component';
import {HomeCompanyComponent} from './home-company/home-company.component';
import {PharmclassDetailsComponent} from './pharmclass-details/pharmclass-details.component';
import {MedicineDetailsComponent} from './medicine-details/medicine-details.component';

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
    path: 'medicines/:question',
    component: MedicineDetailsComponent
  },
  {
    path: '',
    redirectTo: '/companies-home',
    pathMatch: 'full'
  },
  {
    path: 'pharmclass-details',
    component: PharmclassDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
