import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class CountryListService {
  private readonly COUNTRY_API_URL= "https://restcountries.com/v3.1/all";
  private readonly COUNTRY_API_URLV2= " https://restcountries.com/v2/all";
  constructor(private http: HttpClient){}

  // Récupération de la liste des pays de la version 3
  public getCountries(): Observable<any[]>{

    return this.http.get<any[]>(this.COUNTRY_API_URL).pipe(
      tap(countries => console.log("countries:", countries)),
      catchError(this.handleError)
    )
  }

  // Récupération de la liste des pays de la version 2
  public getCountriesByCode():Observable<any[]>{
    return this.http.get<any[]>(this.COUNTRY_API_URLV2).pipe(
      tap(country2 => console.log("country:", country2)),
       catchError(this.handleError)
    )
  }

  // Récupération du theme-color sauvegarder dans le localStorage 
  public getStoredTheme():string{
    return localStorage.getItem('theme-color')!;
  }

// sauvegarder le theme-color  dans le localStorage 
  public setStoredTheme(theme: string):void{
    localStorage.setItem('theme-color', theme)!;
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
