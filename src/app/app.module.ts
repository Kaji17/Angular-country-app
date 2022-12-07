import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
