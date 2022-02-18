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
    let aS;
    let bS;
    if (column === 'address') {
      aS = a['address']['city'] + a['address']['street']
      bS = b['address']['city'] + b['address']['street']
    } else {
      aS = a[column]
      bS = b[column]
    }
    if (type === 'string') {
      if (aS.toUpperCase() < bS.toUpperCase()) {
        return -1;
      } else if (aS.toUpperCase() > bS.toUpperCase()) {
        return 1;
      } else {
        return 0;
      }
    } else {
    return aS - bS;
    }
    }
return [...items.sort(comparator)]
}

sortDescending(items: Array<any>, column: string, type: string){
  let comparator = function(a:any, b:any): number{
    let aS;
    let bS;
    if (column === 'address') {
      aS = a['address']['city'] + a['address']['street']
      bS = b['address']['city'] + b['address']['street']
      console.log(aS)
      console.log(bS)
    } else {
      aS = a[column]
      bS = b[column]
    }
    if (type === 'string') {
      if (aS.toUpperCase() > bS.toUpperCase()) {
        return -1;
      } else if (aS.toUpperCase() < bS.toUpperCase()) {
        return 1;
      } else {
        return 0;
      }
    } else {
    return bS - aS;
    }
    }
return [...items.sort(comparator)]
}

}
