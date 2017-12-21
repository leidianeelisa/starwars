import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Characters } from 'app/characters/characters';
import { CharactersService } from 'app/characters/characters.service';

@Injectable()
export class CharacterDetailResolver implements Resolve<Characters> {


    constructor(private service: CharactersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
        const id = route.params['id'];
        return this.service.getCharacterById(id);
    }
}