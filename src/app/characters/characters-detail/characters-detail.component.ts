import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'app/characters/characters';
import { Subscription } from 'rxjs/Subscription';
import { SpeciesService } from 'app/species/species.service';
import { Species } from 'app/species/species';
import { CharactersService } from 'app/characters/characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: 'characters-detail.component.html'
})
export class CharactersDetailComponent implements OnInit {

  character: Characters;
  species: Species[] = [];
  nextPage: String;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: SpeciesService) { }

  ngOnInit() {
    this.getCharacterRoute();
  }

  private getCharacterRoute(): void {
    this.subscription = this.route.data.subscribe(
      (data) => {
        this.character = data[0];
        this.getSpecies();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private getSpecies() {
    this.species = [];
    if (this.character['species'] !== undefined) {
      this.character['species'].forEach(urlSpecie => {
        this.service.getSpeciesById(this.splitUrlSpecie(urlSpecie)).subscribe(
          (specie) => {
            this.species.push(specie);
          }
        )
      });
    }
  }

  private splitUrlSpecie(url: String) {
    const value = url.replace('https://swapi.co/api/species/', '').replace('/', '');
    return value;
  }
}