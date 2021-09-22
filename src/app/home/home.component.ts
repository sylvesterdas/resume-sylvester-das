import { Component } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  faFacebook = faFacebook
  faInstagram = faInstagram
  faTwitter = faTwitter
  faLinkedinIn = faLinkedinIn;

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {
    const { title, meta } = environment;
    this.titleService.setTitle(title);
    this.metaService.addTags(meta);
  }

}
