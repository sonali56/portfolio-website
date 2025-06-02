import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
     // Moved to declarations
  ],
  imports: [
    BrowserModule,
    RouterModule, 
    AppRoutingModule, // Handles routing, no need for RouterModule here
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    ThemeToggleComponent,
    ExperienceComponent,
    ProjectsComponent,
    SocialIconsComponent
  ],
  providers: [],
})
export class AppModule { }
