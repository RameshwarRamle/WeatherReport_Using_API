import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[appCsshighlight]',
})
export class CsshighlightDirective implements OnInit {
  @Input() defaultcolor: string = 'blueviolet';

  @Input() getclass: string = 'alert-info';

  @Input() hovercolor!:string

  @Input() bgcolor: string = 'orange'
  constructor(
    private eleRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {}

 
  ngOnInit() {
    this.basiccsshighlight();
    this.advancecsshighlighter();

    
  }

  basiccsshighlight() {
    this.eleRef.nativeElement.style.backgroundColor = 'orange'
    this.eleRef.nativeElement.style.color = '#fff'
    this.eleRef.nativeElement.style.padding = '15px'
    this.eleRef.nativeElement.className = 'alert alert-info'
    this.eleRef.nativeElement.classList.add(this.getclass)
  }

  advancecsshighlighter() {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.defaultcolor)
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'orange')
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', '#fff')
    this.renderer.setStyle(this.eleRef.nativeElement, 'padding', '15px')
    this.renderer.addClass(this.eleRef.nativeElement, 'alert')
    this.renderer.addClass(this.eleRef.nativeElement, 'alert-warning')
  }

  @HostListener('mouseover')
  onmouseover() {
    this.renderer.setStyle(
      this.eleRef.nativeElement!,
      'background-color',
      this.hovercolor,
    );
  }

  @HostListener('mouseout')
  onmouseout(){
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.defaultcolor)
  }
  
}
