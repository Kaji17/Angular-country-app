import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class CountryListService {
  private readonly COUNTRY_API_URL= "https://restcountries.com/v3.1/all";
  constructor(private http: HttpClient){}

  public getCountries(): Observable<any[]>{

    return this.http.get<any[]>(this.COUNTRY_API_URL).pipe(
      tap(countries => console.log("countries:", countries)),
      catchError(this.handleError)
    )
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
