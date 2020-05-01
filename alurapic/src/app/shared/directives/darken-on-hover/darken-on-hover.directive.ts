import { Directive, ElementRef, HostListener, Host, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]'
})

export class DarkenOnHoverDirective {

  @Input() brightness = '70%';

  constructor( private el: ElementRef,
               private render: Renderer
               ) {}

  @HostListener('mouseover') //decorate
  darkenOn() {
    console.log('darkenOn');
    this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave') //decorate
  darkenOff() {
    console.log('darkenOff');
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}