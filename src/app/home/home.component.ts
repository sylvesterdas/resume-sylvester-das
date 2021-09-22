import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faFacebook = faFacebook
  faInstagram = faInstagram
  faTwitter = faTwitter
  faLinkedinIn = faLinkedinIn;

  constructor() { }

  ngOnInit(): void {

  }

}
