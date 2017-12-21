import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
@Injectable()
export class FilterPipe implements PipeTransform {

  transform(characters: any, filter: any): any {

    if (filter === undefined || filter === '') {
      return characters;
    } else {
      return characters.filter(
        character => character.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
      );
    }
  }
}
