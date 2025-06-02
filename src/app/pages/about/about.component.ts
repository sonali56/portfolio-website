import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { faCode, faDesktop, faServer, faUser,faTools, faBriefcase, faEnvelope, faLaptopCode, faCheck, faLayerGroup, faCogs, faCloud, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faBootstrap, faCss3, faGithub, faHtml5, faJs, faLinkedin, faNode, faNpm, faReact } from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
      CommonModule,
      FontAwesomeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent implements OnInit, OnDestroy {
  private typed: Typed | undefined;
  
  // Icons
  faCode = faCode;
  faDesktop = faDesktop;
  faServer = faServer;
  faUser = faUser;
  faBriefcase = faBriefcase;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faLaptopCode = faLaptopCode;
  faCheck = faCheck;
  faLayerGroup = faLayerGroup;
  faCogs = faCogs;
  faCloud = faCloud;

  // About me text content
  aboutMeContent = [
    `I am a passionate Full Stack Developer at Persistent Systems with expertise in modern web technologies.
    
    My journey in software development started with a strong foundation in Computer Science and has evolved into creating efficient and scalable applications.
    
    I specialize in building responsive web applications using Angular, React, and Node.js.
    
    I'm dedicated to writing clean, maintainable code and creating exceptional user experiences.
    
    Throughout my career, I've developed a deep understanding of both frontend and backend technologies, allowing me to create seamless, full-stack solutions.
    
    I enjoy tackling complex problems and continuously learning new technologies to stay at the forefront of web development.
    
    My approach combines technical expertise with a strong focus on user experience, ensuring that the applications I build are both powerful and user-friendly.
    
    I'm passionate about creating scalable, efficient solutions that make a real impact on users' lives.`
  ];

  skillCategories = [
      {
        name: 'Frontend Development',
        icon: faCode,
        skills: [
          { name: 'Angular', icon: faAngular, level: 90 },
          { name: 'React', icon: faReact, level: 85 },
          { name: 'JavaScript/TypeScript', icon: faJs, level: 90 },
          { name: 'HTML5', icon: faHtml5, level: 95 },
          { name: 'CSS3/SCSS', icon: faCss3, level: 90 },
          { name: 'Bootstrap', icon: faBootstrap, level: 85 }
        ]
      },
      {
        name: 'Backend Development',
        icon: faServer,
        skills: [
          { name: 'Node.js', icon: faNode, level: 85 },
          { name: 'Express.js', icon: faJs, level: 80 },
          { name: 'RESTful APIs', icon: faCloud, level: 85 },
          { name: 'MongoDB', icon: faDatabase, level: 80 }
        ]
      },
      {
        name: 'Development Tools',
        icon: faTools,
        skills: [
          { name: 'Git', icon: faGithub, level: 90 },
          { name: 'npm/yarn', icon: faNpm, level: 85 },
          { name: 'Webpack', icon: faCogs, level: 80 },
          { name: 'VS Code', icon: faCode, level: 95 }
        ]
      }
    ];

  ngOnInit() {
    this.initTyped();
  }

  ngOnDestroy() {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  private initTyped(): void {
    this.typed = new Typed('#typed-about', {
      strings: this.aboutMeContent,
      typeSpeed: 20,
      backSpeed: 0,
      backDelay: 3000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 2000
    });
  }
}
