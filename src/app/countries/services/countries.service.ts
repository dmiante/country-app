import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  private getCountriesRequest(apiURL: string): Observable<Country[]>{
    return this.http.get<Country[]>(apiURL)
      .pipe(
        catchError(() => of([]))
        );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null>{
        return this.http
          .get<Country[]>(`${this.apiURL}/alpha/${code}`)
          .pipe(
            map(countries => countries.length > 0 ? countries[0] : null),
            catchError(() => of(null))
            );
  }

  searchCapital(query: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/capital/${query}`;
    return this.getCountriesRequest(url)
  }

  searchCountry(query: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/name/${query}`;
    return this.getCountriesRequest(url)
  }

  searchRegion(region: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/region/${region}`;
    return this.getCountriesRequest(url)
  }
}
