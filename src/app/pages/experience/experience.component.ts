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
  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  faCertificate = faCertificate;
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
    faCode = faCode;
    faServer = faServer;
    faTools = faTools;

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

  education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'University Name',
      period: '2018 - 2022',
      description: 'Graduated with honors, focused on web development and software engineering'
    }
  ];

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
