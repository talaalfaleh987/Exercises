import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusLabel',
})
export class StatusLabelPipe implements PipeTransform {
  transform(value: string | number): string {
    if (value === null || value === undefined) {
      return '';
    }
    const strValue = String(value);
    switch (strValue) {
      case '0':
        return 'Inactive';
      case '1':
        return 'Active';
      case '2':
        return 'Pending';
      case '3':
        return 'Suspended';
      default:
        return 'Unknown';
    }
  }
}
