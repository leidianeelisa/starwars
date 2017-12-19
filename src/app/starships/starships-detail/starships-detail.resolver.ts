import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Starships } from 'app/starships/starships';
import { StarshipsService } from 'app/starships/starships.service';

@Injectable()
export class StarshipsDetailResolver implements Resolve<Starships> {

    constructor(private service: StarshipsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
        const id = route.params['id'];
        return this.service.getStarshipById(id);
    }
}  