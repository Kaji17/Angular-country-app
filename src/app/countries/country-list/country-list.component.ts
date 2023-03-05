import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../shared/service/countryList.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  public countries: any[] = [];
  private _countryFilter="mot";
  public countryFilterList: any[]= [];
  public theme!: string;
  public storedTheme: string = this.countryList.getStoredTheme();

  constructor(
    private countryList: CountryListService
  ) { }

  ngOnInit(): void {
    this.countryList.getCountries().subscribe({
      next: countries=>{
        this.countries=countries;
        this.countryFilterList=this.countries
      }
    });
    this.theme = localStorage.getItem('theme-color')!;
    this.countryFilter= "";
  }

  // setInterval(() =>{
  //   this.countryList.getStoredTheme();
  // },1);
  getsetthem():void{
    this.storedTheme= this.countryList.getStoredTheme();
  }

  public get countryFilter(): string{
    setTimeout(() => {
      this.getsetthem()
    }, 1);
    return this._countryFilter;
  }

  public set countryFilter(filter: string) {
    this._countryFilter = filter.toLocaleLowerCase();
    console.log(this._countryFilter)
    this.countryFilterList = this._countryFilter ? this.filterCountry(this.countries, this.countryFilter) : this.countries;
    console.log(this.countryFilterList)
    console.log(this.storedTheme)
  }

  private filterCountry(tab: Array<any>, request: string) {
    return tab.filter(function(e) {
      return e.name.common.toLocaleLowerCase().indexOf(request) !== -1 
    })
  }

  private filterCountryByRegion(tab: Array<any>, request: string) {
    return tab.filter(function(e) {
      return e.region.toLocaleLowerCase().indexOf(request) !== -1 
    })
  }

  public AfricaFilter():void{
    let filter = "Africa"
    filter = filter.toLocaleLowerCase();
    this.countryFilterList = filter ? this.filterCountryByRegion(this.countries, filter) : this.countries;
  }

   public AmericaFilter():void{
    let filter = "Americas"
    filter = filter.toLocaleLowerCase();
    this.countryFilterList = filter ? this.filterCountryByRegion(this.countries, filter) : this.countries;
  }

  public AsiaFilter():void{
    let filter = "Asia"
    filter = filter.toLocaleLowerCase();
    this.countryFilterList = filter ? this.filterCountryByRegion(this.countries, filter) : this.countries;
  }

  public EuropeFilter():void{
    let filter = "Europe"
    filter = filter.toLocaleLowerCase();
    this.countryFilterList = filter ? this.filterCountryByRegion(this.countries, filter) : this.countries;
  }

  public OceaniaFilter():void{
    let filter = "Oceania"
    filter = filter.toLocaleLowerCase();
    this.countryFilterList = filter ? this.filterCountryByRegion(this.countries, filter) : this.countries;
  }

  public AllFilter():void{
    this.countryFilterList = this.countries
  }

}
