import {Component, OnInit}from '@angular/core'; 
import { Characters } from 'app/characters/characters';
import { CharactersService } from 'app/characters/characters.service';
@Component ({ 
  selector: 'app-characters-list', 
  templateUrl: 'characters-list.component.html'
}) 
export class CharactersListComponent implements OnInit {

    characters: Characters[];
    nextPage: String;
    backPage: String;
    order:String;

    constructor( private service: CharactersService ) {}

    ngOnInit() {
      this.getCharacters();
    }

    private getCharacters(): void {
      this.service.getCharacters().subscribe(
        (characters) => {
          console.log(characters);
          this.characters = characters['results'];
          this.nextPage = characters['next'];
        },
        (error: any) => {
          console.log('Error to acess the API');
        }
      );
    }

    private splitUrl(url: String) {
      const value = url.replace('https://swapi.co/api/people/', '').replace('/', '');
      return value;
    }

    private getCharacterByFilter(name): void {
      this.service.getCharacterByFilter(name).subscribe(
        (characters) => {
          this.characters = characters['results'];
          this.backPage = characters['previous'];
          this.nextPage = characters['next'];
        },
        (error: any) => {
          console.log('Error to acess the API');
        }
      );
    }

    private getCharascterByPage(page): void {
      this.service.getCharacterByPage(page).subscribe(
        (characters) => {
          this.characters = characters['results'];
          this.backPage = characters['previous'];
          this.nextPage = characters['next'];
        },
        (error: any) => {
          console.log('Error to acess the API');
        }
      );
    }

    

    

   
}