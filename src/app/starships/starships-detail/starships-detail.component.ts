import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Starships } from 'app/starships/starships';
import { Characters } from 'app/characters/characters';
import { CharactersService } from 'app/characters/characters.service';
import { StarshipsService } from 'app/starships/starships.service';
@Component({
  selector: 'app-starships-detail',
  templateUrl: 'starships-detail.component.html'
})

export class StarshipsDetailComponent implements OnInit {

  starship: Starships;
  characters: Characters[] = [];
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private serviceStarships: StarshipsService,
    private serviceCharacters: CharactersService) { }

  ngOnInit(): void {
    this.gethStarshipsRoute();
  }

  private gethStarshipsRoute(): void {
    this.subscription = this.route.data.subscribe(
      (data) => {
        this.starship = data[0];
        this.getPilots()
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private getPilots() {

    this.characters = [];
    if (this.starship['pilots'] !== undefined && this.starship.pilots.length !== 0) {
      this.starship['pilots'].forEach(
        urlCharacter => {
          this.serviceCharacters.getCharacterById(this.splitUrlCharacter(urlCharacter)).subscribe(
            (character) => {
              this.characters.push(character);
            },
            (error: any) => {
              console.log(error);
            }
          )
        }

      );
    }
  }


  private splitUrlCharacter(url: String) {
    const value = url.replace('https://swapi.co/api/people/', '').replace('/', '');
    return value;
  }



}