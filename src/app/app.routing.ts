
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { StarshipsListComponent } from './starships/starships-list/starships-list.component';
import { CharactersDetailComponent } from './characters/characters-detail/characters-detail.component';
import { AboutComponent } from 'app/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'characters', component: CharactersListComponent},
  { path: 'characters/:id', component: CharactersDetailComponent  },
  { path: 'about',component: AboutComponent},
  { path: 'starships', component: StarshipsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [CharactersListComponent, CharactersDetailComponent, StarshipsListComponent];