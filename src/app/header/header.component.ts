import { Component, OnInit } from '@angular/core';
import { CountryListService } from '../countries/shared/service/countryList.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public txtMode!: string;
  public storedTheme!: string ;
  mode!: string;

  constructor(private countryList: CountryListService) {

  }

  ngOnInit(): void {
    this.txtMode = "Dark Mode";
    this.mode = 'dark_mode'
    this.storedTheme ='theme-dark'
  }

  public changeMode(): void {
    if (this.storedTheme === 'theme-dark' && this.txtMode == "Dark Mode") {
      this.countryList.setStoredTheme('theme-light')
      this.storedTheme = this.countryList.getStoredTheme()
      this.txtMode = "Ligth Mode"
      this.mode = 'light_mode'
    } else {
      this.countryList.setStoredTheme('theme-dark')
      this.storedTheme = this.countryList.getStoredTheme()
      this.txtMode = "Dark Mode"
      this.mode = 'dark_mode'
    }
  }


}
