import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Starships } from 'app/starships/starships';

@Injectable()
export class StarshipsService {

    private url = 'https://swapi.co/api/starships/';

    constructor(private http: Http) {}

    getStarships(): Observable<Starships[]> {
      console.log('here');
        return this.http.get(this.url)
          .map(
            res => res.json()
          );
      }
    
}