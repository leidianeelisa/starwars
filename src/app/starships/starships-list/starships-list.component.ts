import {Component}from '@angular/core'; 
import { Starships } from 'app/starships/starships';
import { StarshipsService } from 'app/starships/starships.service';
@Component ({ 
  selector: 'app-starships-list', 
  templateUrl: 'starships-list.component.html'
}) 
export class StarshipsListComponent {

  starships: Starships[];
  nextPage: String;

  constructor(private service: StarshipsService) {}

  ngOnInit() {
    this.getStarships();
  }

  private getStarships(): void {
    console.log('aqui');
    this.service.getStarships().subscribe(
      (starships) => {
        this.starships = starships['results'];
        this.nextPage = starships['next'];
      },
      (error: any) => {
        console.log('Error to acess the API');
      }
    );
  }
  private splitUrl(url: String) {
    const value = url.replace('https://swapi.co/api/starships/', '').replace('/', '');
    return value;
  }
    
}