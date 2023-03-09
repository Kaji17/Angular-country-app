import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../shared/service/countryList.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  //Listes des pays de la version 3 de L'API
  public countries: any[] = [];

  //Le mot insérer dans le input de recherche
  private _countryFilter="mot";

  //La liste des pays filtrer et à afficher dans le HTML
  public countryFilterList: any[]= [];

  //Le nom du theme de couleur choisit
  public theme!: string;

  // Le theme de couleur recuperer dans le localStorage
  public storedTheme: string = this.countryList.getStoredTheme();

  constructor(
    private countryList: CountryListService // Service pour recuperer les pays 
  ) { }

  ngOnInit(): void {
    this.countryList.getCountries().subscribe({
      next: countries=>{
        this.countries=countries; //Listes de tout les pays de la V3
        this.countryFilterList=this.countries // on affiche tout les pays
      }
    });
    this.theme = "theme-dark"; 
    this.countryFilter= "";
  }

 //Recupération des du theme de la localStorage
  getsetthem():void{
    this.storedTheme= this.countryList.getStoredTheme();
  }

  //Récupération de la liste des pays filtrer 
  public get countryFilter(): string{
    // Répeter l'opération de récupération du theme dans 0.001 s
    setTimeout(() => {
      this.getsetthem()
    }, 1);
    return this._countryFilter;
  }

  //Ajout des pays a la liste de filtre
  public set countryFilter(filter: string) {
    this._countryFilter = filter.toLocaleLowerCase();
    console.log(this._countryFilter)
    this.countryFilterList = this._countryFilter ? this.filterCountry(this.countries, this.countryFilter) : this.countries;
    console.log(this.countryFilterList)
    console.log(this.storedTheme)
  }

  //Recherche du pays par le nom 
  private filterCountry(tab: Array<any>, request: string) {
    return tab.filter(function(e) {
      return e.name.common.toLocaleLowerCase().indexOf(request) !== -1 
    })
  }

  //Recherche du pays par Region
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
