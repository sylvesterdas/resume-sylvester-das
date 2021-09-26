import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  data: any;

  @Input()
  inverted: boolean = false;

  @Input()
  lastChild: boolean = false;

}
