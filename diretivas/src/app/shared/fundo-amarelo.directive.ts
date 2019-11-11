import { Directive, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Directive({
  //Pode ser utilizado varios seletores
  selector: 'p[fundoAmarelo], button[fundoAmarelo]'
})
export class FundoAmareloDirective {


  constructor(private _elementRef: ElementRef, 
              private _renderer: Renderer,
              private _renderer2: Renderer2) {
    //console.log(this._elementRef);

    //Evitar utilizar esse tipo de código por segurança
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    //Forma correta de utilizar
    this._renderer.setElementStyle(this._elementRef.nativeElement,
                                   'background-color',
                                   'yellow');

    //Renderer esta depreciado, deve ser utilizado o Renderer2                      
    this._renderer2.setStyle(this._elementRef.nativeElement,
                                    'background-color',
                                    'yellow');                               
   }
}
