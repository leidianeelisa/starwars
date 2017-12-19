import {Component, OnInit}from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'app/characters/characters';
import { Subscription } from 'rxjs/Subscription';

@Component ({ 
    selector: 'app-characters-detail', 
    templateUrl: 'characters-detail.component.html'
  }) 
  export class CharactersDetailComponent implements OnInit  {

    character: Characters;
    private subscription: Subscription;

    constructor(
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.getCharacterRoute();
      }  
      
      private getCharacterRoute(): void {
        this.subscription = this.route.data.subscribe(
          (data) => {
            this.character = data[0];
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
  }