import { AfterViewInit, Component, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = environment.title;
  loading = true;
  faAngleUp = faAngleUp

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  scrollUp(id: string) {
    (this.document.getElementById(id) as HTMLElement)
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
