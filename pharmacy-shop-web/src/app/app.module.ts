import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeCompanyComponent } from './home-company/home-company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import {FormsModule} from '@angular/forms';
import { PharmclassDetailsComponent } from './pharmclass-details/pharmclass-details.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicineCardComponent } from './shared/medicine-card/medicine-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCompanyComponent,
    CompanyDetailsComponent,
    PharmclassDetailsComponent,
    MedicineDetailsComponent,
    MedicineCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
