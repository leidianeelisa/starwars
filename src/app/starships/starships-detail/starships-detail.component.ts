import {Component, OnInit }from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Starships } from 'app/starships/starships';
@Component ({ 
    selector: 'app-starships-detail', 
    templateUrl: 'starships-detail.component.html'
  }) 

  export class StarshipsDetailComponent implements OnInit  {

    starship: Starships;
    private subscription: Subscription;

    constructor(
        private route: ActivatedRoute) {}

    ngOnInit(): void {
         this.gethStarshipsRoute();
    }

    private gethStarshipsRoute(): void {
        this.subscription = this.route.data.subscribe(
          (data) => {
            this.starship = data[0];
          },
          (error: any) => {
            console.log(error);
          }
        );
      }

}