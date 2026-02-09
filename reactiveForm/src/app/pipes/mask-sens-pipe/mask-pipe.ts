import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
})
export class MaskPipe implements PipeTransform {
  transform(value: string | number, limit: number, char: string = '*'): string {
    if (value === null || value === undefined || value === '') {
      return '';
    }

    const strValue = String(value);

    const visibleCount = Math.max(0, Math.floor(limit || 0));

    if (visibleCount >= strValue.length) {
      return strValue;
    }
    if (limit >= strValue.length) {
      return strValue;
    }

    const masked = char.repeat(strValue.length - limit);
    const visible = strValue.slice(-limit);

    return masked + visible;
  }
}
