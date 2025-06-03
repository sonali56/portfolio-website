import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import Typed from 'typed.js';
import { AboutComponent } from '../about/about.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
		FormsModule,
		ContactComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomeComponent implements OnInit, OnDestroy {
	private typed: Typed | undefined;

	// Icons
	faFileAlt = faFileAlt;
	faEnvelope = faEnvelope;

	// Active section tracking
	activeSection: string = 'hero';
	sections: string[] = ['hero', 'about', 'experience', 'projects', 'contact'];

	constructor() {
	}

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
				'Full Stack .NET Developer',
				'Angular Developer',
				'.NET Developer',
				'Senior Software Engineer'
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
}
