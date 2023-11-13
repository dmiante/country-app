import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiURL}/capital/${query}`)
      .pipe(catchError(() => of([])));
  }

  searchCountry(query: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiURL}/name/${query}`)
      .pipe(catchError(() => of([])));
  }

  searchRegion(region: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiURL}/region/${region}`)
      .pipe(catchError(() => of([])));
  }
}
