import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {path: "countries",component: CountryListComponent},
      {path: "countries/:id",component: CountryDetailComponent},
      { path: "", redirectTo: "countries", pathMatch: "full" },
      { path: "**", redirectTo: "countries", pathMatch: "full" },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
