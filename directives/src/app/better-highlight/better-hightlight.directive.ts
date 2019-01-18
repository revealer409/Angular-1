import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective {
  // tslint:disable-next-line:no-inferrable-types
  @Input() defaultColor: string = 'transparent';
  // tslint:disable-next-line:no-inferrable-types
  // tslint:disable-next-line:no-input-rename
  // tslint:disable-next-line:no-inferrable-types
  // tslint:disable-next-line:no-input-rename
  // tslint:disable-next-line:no-inferrable-types
  // tslint:disable-next-line:no-input-rename
  @Input('appBetterHightlight') highlightColor: string = 'blue';
  // tslint:disable-next-line:no-inferrable-types
  @HostBinding('style.backgroundColor') backgroundColor: string;



  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
  //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
