import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  education = [
    {
      time: "2010",
      head: "Higher Secondary certificate",
      links: [{ a: "http://www.elphinstone.ac.in/", content: "Elphinstone College, Maharashtra board, Mumbai, IN" }],
      body: [
        "From this college of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend."
      ]
    },
    {
      time: "2017",
      head: "Bachelor of Science in IT",
      links: [
        { a: "https://mu.ac.in/", content: "University of Mumbai, Mumbai, IN" },
        { a: "https://www.wilsoncollege.edu/", content: "Elphinstone College, Wilson College, Mumbai, IN" }
      ],
      body: [
        "I have completed Bachelors degree from the Mumbai University, Mumbai, India"
      ]
    },
    {
      time: "2021",
      head: "International Academic Qualifications",
      links: [
        { a: "https://www.wes.org/ca/", content: "World Education Services" }
      ],
      body: [
        "World Education Services (WES) has evaluated the associated credential on behalf of the holder. Verifies the authenticity of the claimed credential. Provides assurance that the awarding institution  and/or program was accredited at the point that the credential was issued Indicates that the associated credential has been assessed for its Canadian equivalency"
      ]
    },
    {
      time: "2021",
      head: "Developing Cloud Applications with Node.js and React",
      links: [
        { a: "https://www.edx.org/", content: "Issued by edX" },
        { a: "https://www.ibm.com/in-en", content: "Authorized by IBM" },
      ],
      body: [
        "This credential earner understands how to develop and deploy full-stack web applications and several JavaScript frameworks. The individual knows how to invoke Web Services, parse with JSON data and integrate with Cloud APIs to add AI capabilities to applications"
      ]
    },
  ];

  experience = [
    {
      time: "2016",
      head: "Intern - Android app development",
      links: [
        { a: "https://intellinects.com", content: "Intellinects Ventures Pvt Ltd, Mumbai, IN" }
      ],
      body: [
        "The starting point of my programming career. Apart from android, includes a project that required me to build it using any Java framework, so I used Struts2.",
        "Other minor projects involved in core PHP and basic HTML5, CSS3 and JS/JQuery"
      ]
    },
    {
      time: "2016 - 2017",
      head: "Full stack programmer",
      links: [
        { a: "https://intellinects.com", content: "Intellinects Ventures Pvt Ltd, Mumbai, IN" }
      ],
      body: [
        "One of the major projects that I was involved in was The bus tracking system for parents/administators of the school to track the location of the respective school buses. This projects reqired intense Android skills along with the ability to sync the location of the bus to the corresponding parents/administrator."
      ]
    },
    {
      time: "May, 2017",
      head: "Android Consultant",
      links: [
        { a: "https://tacto.in", content: "Tacto Infomedia Pvt Ltd, Mumbai, IN" }
      ],
      body: [
        "A freelance contract for a month, WORTH IT!",
        "Here I had an opportunity to work along with some skilled developers and learn a lot from them about team work and software development process. Got to work on this amazing android app 'Wodrob'"
      ]
    },
    {
      time: "2017 - 2018",
      head: "Software Developer",
      links: [
        { a: "https://purelogic.in/", content: "Purelogic Labs India Pvt. Ltd., New Delhi, IN" }
      ],
      body: [
        "We are a system solution architect, a one stop solution provider that builds electric hardware from scratch.",
        "Planned and built an android application for detecting and providing the Air Quality Index (AQI) of your surroundings",
        "Built a server to absorb the AQI readings emitted from the PM2.5 sensors"
      ]
    },
    {
      time: "2018 - 2020",
      head: "Senior Software Engineer",
      links: [
        { a: "https://tacto.in", content: "Tacto Infomedia Pvt Ltd, Mumbai, IN" }
      ],
      body: [
        "Service-based company for technical solutions and software development",
        "Planned and developed a home delivery app called Pedidos, Bolivia.<br />CM Chashak app for event management system for Maharashtra CM.<br />Worked in a delivery system for HEB, Texas called Lash Delivery.<br />Awarded Problem Solver of the year 2018-19."
      ]
    },
    {
      time: "2020 - ...",
      head: "Senior Software Engineer",
      links: [
        { a: "https://www.scitara.com", content: "Scitara Technologies Pvt. Ltd., Mumbai, IN" }
      ],
      body: [
        "Scitara is a global provider of laboratory-specific, cloud-based software solutions for the life sciences and other science-based industries.",
        "Planned, developed and managed end-to-end MS OneDrive connector<br />Planned, developed and managed end-to-end MS Excel connector<br />Planned, developed and managed end-to-end IDBS connector<br />Developed few frontend components in ReactJS"
      ]
    },
  ];

}
