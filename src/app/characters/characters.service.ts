import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class CharactersService {
    private url = 'https://swapi.co/api/people/';

  constructor(private http: Http) {}

  getCharacters(): Observable<any[]> {
    return this.http.get(this.url)
      .map(
        res => res.json()
      );
  }

}