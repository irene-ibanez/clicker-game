import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUnits'
})
export class CustomUnitsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value > 1000000000) {
      return `${(value/1000000000).toFixed(3)} g`;
    } else if (value  > 1000000) {
      return `${(value/1000000).toFixed(3)} m`;
    } else if (value > 1000) {
      return `${value/1000} k`;
    }
    return value.toString();
  }

}
