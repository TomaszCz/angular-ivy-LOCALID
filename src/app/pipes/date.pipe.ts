import { Pipe, PipeTransform, Injectable, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable()
@Pipe({
    name: 'fnDate'
})
export class FnDatePipe implements PipeTransform {

    constructor(@Inject(LOCALE_ID) private locale: string
    ) { }

    transform(value: string | Date, format: string = 'shortDate', timezone: string = 'UTC'): any {
        return formatDate(value, format, this.locale, timezone);
    }
}
