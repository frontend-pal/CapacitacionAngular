import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../services/charResponse';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Result[], page = 0, search: string): Result[] {
    
    if (search !== '') {
      console.log(search);
      return value.filter(x => x.name.toLowerCase().startsWith(search));
    }
    return value.slice(page, page + 2);
  }

}
