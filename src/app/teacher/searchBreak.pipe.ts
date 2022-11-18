import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBreak'
})
export class SearchBreakPipe implements PipeTransform {

  transform(data: any, val: string): any {
    if (!val) {
        return data;
      } else {
        val = val.toLowerCase();
        return data.filter((x: any) => x.break_name.toLowerCase().includes(val));
      }
  }

}
