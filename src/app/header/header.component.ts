import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public txtMode!: string;

  constructor() { }

  ngOnInit(): void {
    this.txtMode= "Dark Mode";
  }

  public changeMode(): void {
    if (this.txtMode == "Dark Mode") {
      this.txtMode= "Ligth Mode"
    }else{
      this.txtMode= "Dark Mode"
    }
  }


}
