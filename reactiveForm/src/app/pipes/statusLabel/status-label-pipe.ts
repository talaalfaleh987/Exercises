import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../../enums/status.enum';

@Pipe({
  name: 'statusLabel',
})
export class StatusLabelPipe implements PipeTransform {
  transform(value: Status): string {
    switch (value) {
      case Status.INACTIVE:
        return 'Inactive';
      case Status.ACTIVE:
        return 'Active';
      case Status.PENDING:
        return 'Pending';
      case Status.SUSPENDED:
        return 'Suspended';
      default:
        return 'Unknown Status';
    }
  }
}
