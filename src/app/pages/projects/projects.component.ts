import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent {
  faGithub = faGithub;
  faExternalLink = faExternalLinkAlt;

  projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Angular, featuring dark mode, responsive design, and smooth animations.',
      image: 'assets/projects/portfolio.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://your-portfolio.com',
      featured: true
    },
    {
      title: 'E-commerce Dashboard',
      description: 'An admin dashboard for managing e-commerce operations, including inventory, orders, and customer data.',
      image: 'assets/projects/dashboard.jpg',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/dashboard',
      liveUrl: 'https://your-dashboard.com',
      featured: true
    },
    {
      title: 'Weather App',
      description: 'A weather application that shows current weather and forecasts using modern web technologies.',
      image: 'assets/projects/weather.jpg',
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
      githubUrl: 'https://github.com/yourusername/weather-app',
      liveUrl: 'https://your-weather-app.com',
      featured: false
    }
  ];

  getFeaturedProjects() {
    return this.projects.filter(project => project.featured);
  }

  getNonFeaturedProjects() {
    return this.projects.filter(project => !project.featured);
  }
}
