import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { faEnvelopeOpen, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {  } from "@angular/google-maps";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  apiKey = environment.googleMapsApiKey;

  contacts = [
    { icon: faMobileAlt, title: "phone number", link: { a: "tel:+919757140063", content: "(+91) 97571-40063" } },
    { icon: faEnvelopeOpen, title: "email", link: { a: "mailto:sylvester.das@gmail.com", content: "sylvester.das@gmail.com" } },
    { icon: faMapMarkerAlt, title: "location", link: { a: "https://goo.gl/maps/JCuTVEqnnHX8znpm6", content: "Virar, Mumbai, India" } }
  ]

  apiLoaded: Observable<boolean>;

  styles: google.maps.MapTypeStyle[] = [
    {
      featureType: 'landscape',
      stylers: [{ color: '#f7f7f7' }],
    },
    {
      stylers: [{ hue: '#68c3a3' }],
    },
    {
      featureType: 'road',
      stylers: [{ hue: '#fff' }, { saturation: -70 }],
    },
    {
      elementType: 'labels',
      stylers: [{ hue: '' }],
    },
    {
      featureType: 'poi', //points of interest
      stylers: [{ hue: '' }],
    },
  ];

  options: google.maps.MapOptions = {
    center: { lat: 19.4567142, lng: 72.8062872 },
    zoom: 15,
    scrollwheel: false,
    disableDefaultUI: true,
    styles: this.styles,
  };

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }
}
