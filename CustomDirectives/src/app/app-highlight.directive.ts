import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private el : ElementRef , private render : Renderer2) { 
    //this.el.nativeElement.style.background = 'yellow';
    this.render.setStyle(this.el.nativeElement,'color','red');
}

}
