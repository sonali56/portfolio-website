import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-theme-toggle',
    templateUrl: './theme-toggle.component.html',
    styleUrls: ['./theme-toggle.component.scss'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThemeToggleComponent implements OnInit {
    faSun = faSun;
    faMoon = faMoon;
    isDarkTheme$!: Observable<boolean>; // Added definite assignment assertion

    constructor(private themeService: ThemeService) { }

    ngOnInit(): void {
        this.isDarkTheme$ = this.themeService.isDarkTheme$;
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }
}
