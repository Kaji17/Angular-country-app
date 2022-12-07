import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../shared/service/countryList.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  public countries: any[] = [];
  constructor(
    private countryList: CountryListService
  ) { }

  ngOnInit(): void {
    this.countryList.getCountries().subscribe({
      next: countries=>{
        this.countries=countries
      }
    })
  }

  /**
   * displayMenu
   */
  public displayMenu(): void {
    
  }

}
