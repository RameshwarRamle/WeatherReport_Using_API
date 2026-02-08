import { Pipe, PipeTransform } from '@angular/core';
import { Icricketers } from '../const/interfaces';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(cricketers: Icricketers[], searchtext: string): Icricketers[] {
    if (!cricketers) {
      return [];
    }

    if (!searchtext) {
      return cricketers;
    }

    searchtext = searchtext.toLowerCase();

    return cricketers.filter((c) =>
      c.name.toLowerCase().includes(searchtext) ||
        c.country.toLowerCase().includes(searchtext) ||
        c.role.toLowerCase().includes(searchtext)
    );
  }
}
