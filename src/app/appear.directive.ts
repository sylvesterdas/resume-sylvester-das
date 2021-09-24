import {
  ElementRef,
  Output,
  Directive,
  AfterViewInit,
  OnDestroy,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Directive({
  selector: '[appear]',
})
export class AppearDirective implements AfterViewInit, OnDestroy {
  @Output()
  appear: EventEmitter<void>;

  elementPos: number|any;
  elementHeight: number|any;

  scrollPos: number|any;
  windowHeight: number|any;

  subscriptionScroll: Subscription|any;
  subscriptionResize: Subscription|any;

  constructor(private element: ElementRef) {
    this.appear = new EventEmitter<void>();
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.scrollPos = (event.path[1].scrollY);
    this.checkVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.elementPos = this.getOffsetTop(this.element);
    this.elementHeight = this.element.nativeElement;
    this.windowHeight = event.path[1].innerHeight;
    this.checkVisibility();
  }

  getOffsetTop(element: any) {
    let offsetTop = element.offsetTop || 0;
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  checkVisibility() {
    console.log(this.isVisible());
    if (this.isVisible()) {
      this.unsubscribe();
      this.appear.emit();
    }
  }
  isVisible() {
    console.log(this.scrollPos);
    console.log(this.elementPos);
    console.log(this.windowHeight);
    console.log(this.scrollPos);
    return (
      this.scrollPos >= this.elementPos ||
      this.scrollPos + this.windowHeight >= this.elementPos + this.elementHeight
    );
  }

  subscribe() {
    // this.subscriptionScroll = fromEvent(this.window, 'scroll')
    //   .pipe(startWith(null))
    //   .subscribe(() => {
    //     this.saveScrollPos();
    //     this.checkVisibility();
    //   });
    // this.subscriptionResize = fromEvent(this.window, 'resize')
    //   .pipe(startWith(null))
    //   .subscribe(() => {
    //     this.saveDimensions();
    //     this.checkVisibility();
    //   });
  }
  unsubscribe() {
    if (this.subscriptionScroll) {
      this.subscriptionScroll.unsubscribe();
    }
    if (this.subscriptionResize) {
      this.subscriptionResize.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.subscribe();
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
}
