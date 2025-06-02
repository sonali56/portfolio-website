import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SocialIconsComponent {
  socialLinks = [
    { icon: faGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: faTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' }
  ];
}
