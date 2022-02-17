import { User } from './users.service';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name:'sort'})
export class SortPipe implements PipeTransform {

transform(items: User[], direction: boolean, column: string, type: string) {
let sortedItems=[];
sortedItems = direction ? this.sortAscending(items, column, type): this.sortDescending(items, column, type)
return sortedItems;
}
sortAscending(items: Array<any>, column: string, type: string){
  let comparator = function(a:any, b:any): number{
    if (type === 'string') {
      if (a[column].toUpperCase() < b[column].toUpperCase()) {
        return -1;
      } else if (a[column].toUpperCase() > b[column].toUpperCase()) {
        return 1;
      } else {
        return 0;
      }
    } else {
    return a[column]-b[column];
    }
    }
return [...items.sort(comparator)]
}

sortDescending(items: Array<any>, column: string, type: string){
  let comparator = function(a:any, b:any): number{
    if (type === 'string') {
      if (a[column].toUpperCase() > b[column].toUpperCase()) {
        return -1;
      } else if (a[column].toUpperCase() < b[column].toUpperCase()) {
        return 1;
      } else {
        return 0;
      }
    } else {
    return b[column]-a[column];
    }
    }
return [...items.sort(comparator)]
}

}
