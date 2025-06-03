import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faCss3, faHtml5, faJs, faReact, faSass, faNodeJs, faNpm, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faGraduationCap, faCertificate, faCode, faServer, faTools } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExperienceComponent {
  // FontAwesome icons for work experience and education
  faBriefcase = faBriefcase; // Icon for work experience
  faGraduationCap = faGraduationCap; // Icon for education
  faCertificate = faCertificate; // Icon for certifications

  // FontAwesome icons for tech stack
  faAngular = faAngular; // Angular icon
  faReact = faReact; // React icon
  faHtml5 = faHtml5; // HTML5 icon
  faCss3 = faCss3; // CSS3 icon
  faSass = faSass; // Sass icon
  faJs = faJs; // JavaScript icon
  faNodeJs = faNodeJs; // Node.js icon
  faNpm = faNpm; // NPM icon
  faGitAlt = faGitAlt; // Git icon
  faCode = faCode; // Code icon
  faServer = faServer; // Server icon
  faTools = faTools; // Tools icon

  // Array to store work experience details
  workExperience = [
    {
      title: 'Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: [
        'Developed responsive web applications using Angular and React',
        'Collaborated with cross-functional teams to deliver high-quality solutions',
        'Implemented modern UI/UX designs and best practices'
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'Startup Inc.',
      period: '2021 - 2022',
      description: [
        'Assisted in developing and maintaining web applications',
        'Learned modern web development technologies and practices',
        'Participated in code reviews and team meetings'
      ]
    }
  ];

  // Array to store education details
  education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'University Name',
      period: '2018 - 2022',
      description: 'Graduated with honors, focused on web development and software engineering'
    }
  ];

  // Array to store certification details
  certifications = [
    {
      name: 'Angular Development',
      issuer: 'Certification Authority',
      year: '2023'
    },
    {
      name: 'React Development',
      issuer: 'Online Learning Platform',
      year: '2022'
    }
  ];
}
