
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { StarshipsListComponent } from './starships/starships-list/starships-list.component';
import { CharactersDetailComponent } from './characters/characters-detail/characters-detail.component';
import { AboutComponent } from 'app/about/about.component';
import { CharacterDetailResolver } from 'app/characters/characters-detail/characters-detail.resolver';
import { StarshipsDetailComponent } from 'app/starships/starships-detail/starships-detail.component';
import { StarshipsDetailResolver } from 'app/starships/starships-detail/starships-detail.resolver';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'characters', component: CharactersListComponent},
  { path: 'characters/:id', component: CharactersDetailComponent, resolve: [CharacterDetailResolver] },
  { path: 'about',component: AboutComponent},
  { path: 'starships', component: StarshipsListComponent},
  { path: 'starships/:id', component: StarshipsDetailComponent, resolve: [StarshipsDetailResolver]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [CharactersListComponent, CharactersDetailComponent, StarshipsListComponent, StarshipsDetailComponent];