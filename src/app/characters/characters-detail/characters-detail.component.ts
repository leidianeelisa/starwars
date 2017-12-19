import {Component, OnInit}from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'app/characters/characters';
import { Subscription } from 'rxjs/Subscription';
import { SpeciesService } from 'app/species/species.service';
import { Species } from 'app/species/species';
import { CharactersService } from 'app/characters/characters.service';

@Component ({ 
    selector: 'app-characters-detail', 
    templateUrl: 'characters-detail.component.html'
  }) 
  export class CharactersDetailComponent implements OnInit  {

    character: Characters;
    specie: Species;
    nextPage: String;
    private subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private service: SpeciesService) {}

    ngOnInit() {
        this.getCharacterRoute();
      }  
      
      private getCharacterRoute(): void {
        this.subscription = this.route.data.subscribe(
          (data) => {
            this.character = data[0];
           // this.character.species = this.getSpecies(this.character.species);
          },
          (error: any) => {
            console.log(error);
          }
        );
      }

      private getSpecies(urlSpecie: string):any{
        if (urlSpecie !== undefined) {
          this.service.getSpeciesById(this.removeUrlSpecie(urlSpecie)).subscribe(
            (specie) => {
              console.log(specie);
              this.specie = specie['results'];
              this.nextPage = specie['next'];
            },(error: any) => {
              console.log('Error to acess the API');
            }
          );
        }
      }

      private removeUrlSpecie(url: String) {
        const value = url.replace('https://swapi.co/api/species/', '').replace('/', '');
        return value;
      }
  }