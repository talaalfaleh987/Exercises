import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
})
export class MaskPipe implements PipeTransform {
  //2
  transform(value: string | number, limit: number, char: string = '*'): string {
    //3
    if (value === null || value === undefined || value === '') {
      return '';
    }

    const strValue = String(value);
    //4
    if (limit >= strValue.length) {
      return strValue;
    }
    //5
    const masked = char.repeat(strValue.length - limit);
    const visible = strValue.slice(-limit);

    return masked + visible;
  }
}
