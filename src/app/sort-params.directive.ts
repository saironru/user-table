import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appSortParams]'
})
export class SortParamsDirective {

  nameDir = true;
  ageDir = true;
  genderDir = true;
  departmentDir = true;
  addressDir = true;

  @Output() param: EventEmitter<any> = new EventEmitter()

  constructor(private element: ElementRef) { }

  @HostListener('click') onClickIcon() {
    this.selectSort(this.element.nativeElement.id)
  }

  selectSort(id: string){
    let obj;

    switch(id){
    case 'name':
    this.nameDir = !this.nameDir;
    obj = {dir:this.nameDir, col:"name", typ:"string"};
    break;
    case 'age':
    this.ageDir = !this.ageDir;
    obj = {dir:this.ageDir, col:"age", typ:"number"};
    break;
    case 'gender':
    this.genderDir = !this.genderDir;
    obj = {dir:this.genderDir, col:"gender", typ:"string"};
    break;
    case 'departament':
    this.departmentDir = !this.departmentDir;
    obj = {dir:this.departmentDir, col:"department", typ:"string"};
    break;
    case 'addres':
    this.addressDir = !this.addressDir;
    obj = {dir:this.addressDir, col:"address", typ:"string"};
    break; 
    }

    this.param.emit(obj);
  }
}
