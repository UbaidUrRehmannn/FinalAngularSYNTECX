import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchShift',
})
export class SearchPipe implements PipeTransform {
  transform(data: any, searchInput: string) {
    if (!searchInput) {
      return data;
    } else {
      searchInput = searchInput.toLowerCase();
      return data.filter((x: any) => x.shift_name.toLowerCase().includes(searchInput));
    }
  }
}
