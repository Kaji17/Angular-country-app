import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { CountryListService } from '../shared/service/countryList.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  public countries!: any
  public countryv2!: any
  public codeCountry!: string
  public countryListT!: any[]
  public currencieTab!: any
  public BorderCountryList!: any[]
  constructor( 
    private countryList: CountryListService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.countryList.getCountries().subscribe((countries: any[])=>{
      this.countryListT = countries
      this.countries = countries.find(country1=> country1.name.common === id)!;
      this.codeCountry = this.countries.cca3
      console.log(this.codeCountry)
    });

    this.countryList.getCountriesByCode().subscribe((countries: any[])=>{
      this.countryv2 = countries.find(country1=> country1.alpha3Code === this.countries.cca3)!;
      console.log("payv2:",this.countryv2)
    });
    
  }

  public backToList(): void{
    this.router.navigate(['/hotels']);
  }

  public getBorderCountry(code:string): string{
    let country = this.countryListT.find(country1 => country1.cca3 === code)!
    return country.name.common
  }


}
