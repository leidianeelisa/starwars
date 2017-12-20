import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Species } from 'app/species/species';

@Injectable()
export class SpeciesService{
    private url ='https://swapi.co/api/species/'; 

    constructor(private http: Http) {}

    getSpeciesById(id: String): Observable<Species>{
        return this.http.get(this.url + id)
        .map(
          res=> res.json()
        );
      }
}