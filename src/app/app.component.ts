import { AfterViewInit, Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = environment.title;
  loading = true;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}
