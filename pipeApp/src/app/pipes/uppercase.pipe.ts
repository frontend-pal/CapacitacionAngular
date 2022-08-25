import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string | any): string {
    if (typeof value === 'string') {
      return value.toUpperCase();
    } else {
      return 'problema';
    }

  }

}
