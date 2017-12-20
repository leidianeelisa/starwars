import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'orderBy'
  })

  export class OrderBy implements PipeTransform {
    transform(characters: any, order: any) {
       if(order !== undefined){
        if (order === 'asc') {
            return characters.sort(
                (a: any, b: any) => {
                    if (a.name < b.name){
                        return -1;
                    }else if (a.name > b.name){
                        return 1;
                    }else {
                        return 0;
                      }
                }
            );
        }
       }

       return characters;
    }
  }