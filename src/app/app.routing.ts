
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { StarshipsListComponent } from './starships/starships-list/starships-list.component';
import { AboutComponent } from 'app/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'characters', component: CharactersListComponent},
  { path: 'about',component: AboutComponent},
  { path: 'starships', component: StarshipsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [CharactersListComponent, StarshipsListComponent];