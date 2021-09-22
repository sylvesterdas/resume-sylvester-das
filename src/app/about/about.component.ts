import { Component } from '@angular/core';
import { faPaperPlane, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  faPaperPlane = faPaperPlane
  faDownload = faDownload
  faCheckSquare = faCheck

  listIconStyle = {
    color: '#68c3a3', marginRight: '10px'
  }

  skills: String[] = [
    "Hybrid Mobile Applications",
    "Angular JS frontend",
    "Firebase based applications",
    "NodeJS with MongoDB",
    "React JS frontend with PWA",
    "Electron Desktop application"
  ]

  details = {
    Name: "Sylvester Das",
    Date: "21 April 1993",
    Address: "Mumbai, India",
    Nationality: "Indian",
    Phone: "(+91) 97571 40063",
    Email: "sylvester.das@gmail.com",
  }

  objective = "An opportunity to work and upgrade oneself, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community. I'm presently expanding my solid experience in multiple technologies like NodeJS, Angular, ReactJS, and hybrid mobile application development using Flutter. I focus on using my interpersonal skills to build good user experience and create a strong interest in my employers. I hope to develop skills in motion design and my knowledge of the Web, and become an honest asset to the business. As an individual, I'm self-confident you’ll find me creative, funny and naturally passionate. I’m a forward thinker, which others may find inspiring when working as a team."

  whatIdo = "I have been working as a MEAN / MERN stack developer. I have a love of performance and object oriented programming, and I have lots of experience in the production of modern web and mobile applications with high performance. I loving creating awesome products and as per my clients’ need. I think user experience when I try to craft something for my clients. Making it awesome.";

}
