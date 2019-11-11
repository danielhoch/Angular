import { Directive, HostListener,  HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOber(){
    // this._renderer2.setStyle(this._elementRef.nativeElement,
    //                         'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer2.setStyle(this._elementRef.nativeElement,
    //                         'background-color', 'white');
    this.backgroundColor = 'white';
  }

  //Primeira forma de fazer
  //@HostBinding('style.backgroundColor') backgroundColor: string;

  //Segunda forma de fazer caso necessário manipular a variável antes.
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  
  private backgroundColor: string;

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) { }

}
