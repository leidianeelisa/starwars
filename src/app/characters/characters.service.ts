import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Characters } from 'app/characters/characters';


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

  getCharacterById(id: String): Observable<Characters>{
    return this.http.get(this.url + id)
    .map(
      res=> res.json()
    );
  }

  getCharacterByFilter(name: String): Observable<Characters[]> {
    return this.http.get(this.url + '?search=' + name)
      .map(
        res => res.json()
      );
  }

  
  getCharacterByPage(page: String): Observable<Characters[]> {
    return this.http.get(page.toString())
      .map(
        res => res.json()
      );
  }
}