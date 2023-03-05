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
  public currencieTab!: any
  constructor( 
    private countryList: CountryListService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.countryList.getCountries().subscribe((countries: any[])=>{
      this.countries = countries.find(country1=> country1.name.common === id)!;
      this.codeCountry = this.countries.cca3
      console.log(this.codeCountry)
    });

    this.countryList.getCountriesByCode().subscribe((countries: any[])=>{
      this.countryv2 = countries.find(country1=> country1.alpha3Code === this.countries.cca3)!;
      console.log("payv2:",this.countryv2)
    });
    // this.currencieTab =JSON.parse(this.countryv2.currencies)
    // console.log("Tab:",this.currencieTab)
  }

  public backToList(): void{
    this.router.navigate(['/hotels']);
  }


}
