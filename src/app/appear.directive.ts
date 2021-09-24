import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { WindowService } from './window.service';

@Directive({
  selector: '[appear]'
})
export class AppearDirective {

  windowHeight: number = 0;
  elementHeight: number = 0;
  elementPos: number = 0;

  @Output()
  appear: EventEmitter<boolean>;

  constructor(
    private element: ElementRef,
    private window: WindowService
  ) {
    this.appear = new EventEmitter<boolean>();
  }

  checkVisible() {
    if (this.elementPos < this.window.nativeWindow.scrollY + this.windowHeight) {
      this.appear.emit(true);
      this.appear.complete();
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkVisible();
  }

  @HostListener('window:load', [])
  onLoad() {
    this.windowHeight = (this.window.nativeWindow.innerHeight);
    this.elementHeight = (this.element.nativeElement as HTMLElement).offsetHeight;
    this.elementPos = (this.element.nativeElement as HTMLElement).offsetTop;
    this.checkVisible();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.windowHeight = (this.window.nativeWindow.innerHeight);
    this.elementHeight = (this.element.nativeElement as HTMLElement).offsetHeight;
    this.elementPos = (this.element.nativeElement as HTMLElement).offsetTop;
    this.checkVisible();
  }

}
