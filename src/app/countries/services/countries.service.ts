import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, catchError, map } from 'rxjs';
import { Country } from '../interfaces/country';

//providedIn: Es para que el srv se exponga globalmente
@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1'
    constructor(private http: HttpClient) { }
    
    //Regresa un pais silo encuentra o null
    searchCountryByAlphaCode(code: string):Observable<Country | null>{ 
        const url = `${this.apiUrl}/alpha/${code}`
        return this.http.get<Country[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0]: null),
                catchError( () =>  of(null))
            );
    }

    searchCapital(term: string):Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${term}`
        return this.http.get<Country[]>(url)
            .pipe(
                /*tap(countries => console.log('Paso por el tap1',countries)),
                map(countries => []),
                tap(countries => console.log('Paso por el tap2',countries))*/
                catchError( () =>  of([]))
            );
    }//retorna un observable

    //Busqueda por Pais
    searchCountry(country:string):Observable<Country[]>{
        const url = `${this.apiUrl}/name/${country}`
        return this.http.get<Country[]>(url)
        .pipe(
            catchError( () =>  of([]))
        );
    }

    //Busqueda por Region
    searchRegion(region:string):Observable<Country[]>{
        const url = `${this.apiUrl}/region/${region}`
        return this.http.get<Country[]>(url)
        .pipe(
            catchError( () =>  of([]))
        );
    }
}