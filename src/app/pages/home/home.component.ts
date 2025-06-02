import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import Typed from 'typed.js';
import { 
  faCode, 
  faDesktop, 
  faServer, 
  faUser, 
  faBriefcase, 
  faEnvelope,
  faDatabase,
  faTools,
  faLaptopCode,
  faCheck,
  faLayerGroup,
  faCogs,
  faCloud,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin, 
  faAngular, 
  faReact, 
  faNode, 
  faJs, 
  faCss3, 
  faHtml5, 
  faBootstrap,
  faNpm,
  faSass,
  faNodeJs,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { AboutComponent } from '../about/about.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ExperienceComponent,
    ProjectsComponent,
    AboutComponent,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit, OnDestroy {
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
  faHome = faHome;

  // Tech stack icons
  faAngular = faAngular;
  faReact = faReact;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faSass = faSass;
  faJs = faJs;
  faNodeJs = faNodeJs;
  faNpm = faNpm;
  faGitAlt = faGitAlt;

  // Active section tracking
  activeSection: string = 'hero';
  sections: string[] = ['hero', 'about', 'experience', 'projects', 'contact'];

  // Contact form data
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  // Submission state
  isSubmitting: boolean = false;

  // Success message state
  showSuccess: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initTyped();
    this.setupSmoothScroll();
    this.checkActiveSection();
  }

  ngOnDestroy(): void {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  private initTyped(): void {
    this.typed = new Typed('#typed-text', {
      strings: [
        'Full Stack Developer',
        'Frontend Developer',
        'Angular Developer',
        'React Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
      showCursor: true
    });
  }

  private setupSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkActiveSection();
  }

  private checkActiveSection() {
    const scrollPosition = window.scrollY;

    this.sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const offset = 100; // Offset to trigger section change earlier

        if (top <= offset && bottom > offset) {
          this.activeSection = section;
        }
      }
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit(): void {
    this.isSubmitting = true;
    console.log('Form submitted:', this.contactData);
    // Add your form submission logic here
  }
}
