import { Component } from '@angular/core';
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";
import { RouterModule } from '@angular/router';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ThemeToggleComponent, RouterModule, SocialIconsComponent],
  standalone: true
})
export class AppComponent {
  title = 'angular-portfolio';
}
