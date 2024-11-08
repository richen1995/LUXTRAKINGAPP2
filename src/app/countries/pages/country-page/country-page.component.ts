import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?: Country; //Signo ? xq puede ser null

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
    
  ){}

  ngOnInit(): void {
    this.activatedRoute
        .params
        .pipe(
          //switchMap => regresa un nuevo observable
          switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
 
        )
        .subscribe((country) =>{
            //console.log({country})
            if(!country){
              return this.router.navigateByUrl('');
            }
            console.log('TENEMOS UN PAIS');
            return this.country = country;
            //return;
        });
    }
}
