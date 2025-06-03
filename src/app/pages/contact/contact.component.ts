import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactComponent {

    faGithub = faGithub;
    faLinkedin = faLinkedin;

    // Contact form data
    contactData = new ContactData(); // Encapsulated contact data into a class

    // Submission state
    isSubmitting: boolean = false;

    // Success message state
    showSuccess: boolean = false;

    onSubmit(): void {
        this.isSubmitting = true;
        console.log('Form submitted:', this.contactData);
        // Add your form submission logic here
    }
}

// Encapsulated contact form data into a separate class
export class ContactData {
    name: string = '';
    email: string = '';
    message: string = '';
}
