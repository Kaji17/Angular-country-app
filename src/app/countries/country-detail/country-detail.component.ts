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

  // Le  dont on veut les deatils
  public countries!: any

  // Le Pays de la version 2 de l'API dont l'alpha3Code
  // est égale à cca3 de la version 3 de l'API
  public countryv2!: any

  // Liste complète des pays de la version 3 de l'API
  public countryListT!: any[]

  //Le nom du theme de couleur choisit
  public theme!: string;

  // Le theme de couleur recuperer dans le localStorage
  public storedTheme: string = this.countryList.getStoredTheme();

  constructor(
    private countryList: CountryListService, // Recuperation du services qui donne la liste des pays
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!; // récuperation du nom du pays selectionner
    console.log(id);
    this.countryList.getCountries().subscribe((countries: any[])=>{
      this.countryListT = countries
      this.countries = countries.find(country1=> country1.name.common === id)!;
    });

    this.countryList.getCountriesByCode().subscribe((countries: any[])=>{
      this.countryv2 = countries.find(country1=> country1.alpha3Code === this.countries.cca3)!;
      console.log("payv2:",this.countryv2)
    });
    this.theme = "theme-dark"; 
    // this.theme = localStorage.getItem('theme-color')!; 
    this.getsetthem()
  }
  //Recupération des du theme de la localStorage
  getsetthem():void{
    this.storedTheme= this.countryList.getStoredTheme();
    setTimeout(() => {
      this.getsetthem()
    }, 1);
  }

  //Button pour revenir à la liste des pays
  public backToList(): void{
    this.router.navigate(['/hotels']);
  }

  // Funtion permettant de retourner le nom du pays avec son code cca3 
  // passer en paramètre
  public getBorderCountry(code:string): string{
    let country = this.countryListT.find(country1 => country1.cca3 === code)!
    return country.name.common
  }


}
