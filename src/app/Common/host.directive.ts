import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  public flag:any=true;
  constructor(private cs:ElementRef){
    
  }

  @HostListener('click') onclick() {
    if(this.flag){
      this.cs.nativeElement.style.color ='red'
      this.flag=!this.flag;
      
 
    }else{
      this.cs.nativeElement.style.color = 'rgb(226, 226, 226)'
      this.flag=!this.flag;

    }
  
  }
}
