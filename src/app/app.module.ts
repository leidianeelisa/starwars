import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { AboutComponent } from './about/about.component';
import { CharactersService } from 'app/characters/characters.service';
import { StarshipsService } from 'app/starships/starships.service';
import { CharacterDetailResolver } from 'app/characters/characters-detail/characters-detail.resolver';
import { StarshipsDetailResolver } from 'app/starships/starships-detail/starships-detail.resolver';
import { SpeciesService } from 'app/species/species.service';
import { FilterPipe } from './filter.pipe';
import { OrderByPipe } from './order-by.pipe';


@NgModule({
  exports: [

  ],
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    AboutComponent,
    routingComponents,
    FilterPipe,
    OrderByPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  providers: [CharactersService, StarshipsService, CharacterDetailResolver, StarshipsDetailResolver, SpeciesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
