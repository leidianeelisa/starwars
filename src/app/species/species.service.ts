import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class SpeciesService{
    private url = 'https://swapi.co/api/species/';
    constructor(private http: Http) {}

    getSpeciesById(id: String): Observable<any> {
        return this.http.get(this.url + id)
          .map(
            res => res.json()
          );
    }
}