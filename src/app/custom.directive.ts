import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(e:ElementRef) {
    e.nativeElement.style.border="2px solid red";
    e.nativeElement.style.background="yellow";
    e.nativeElement.style.color="green";

   }

}
