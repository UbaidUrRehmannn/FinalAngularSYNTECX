import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSubTeam'
})
export class SearchSubTeamPipe implements PipeTransform {

  transform(data: any, val: string): any {
    
    if (!val) {
        return data;
      } else {
        val = val.toLocaleLowerCase();
        return data.filter((x: any) => x.break_name.toLowerCase().includes(val));
      }
  }

}
