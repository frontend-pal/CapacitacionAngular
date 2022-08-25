import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../services/charResponse';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Result[], page = 0): Result[] {
    return value.slice(page, page + 2);
  }

}
