import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { DarkLigthModeComponent } from './shared/component/dark-ligth-mode/dark-ligth-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryListComponent,
    CountryDetailComponent,
    DarkLigthModeComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
