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

  socialIcons = [
    { href: "https://www.facebook.com/sylvester.das", icon: faFacebook },
    { href: "https://twitter.com/achillies_", icon: faTwitter },
    { href: "https://www.instagram.com/achillies_", icon: faInstagram },
    { href: "https://www.linkedin.com/in/sylvesterdas/", icon: faLinkedinIn },
  ]

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {
    const { title, meta, twitter } = environment;
    this.titleService.setTitle(title);
    this.metaService.addTags(meta, true);
    this.metaService.addTags(twitter);
  }

}
