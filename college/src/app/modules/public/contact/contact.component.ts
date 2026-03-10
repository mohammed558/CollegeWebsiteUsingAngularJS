import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    contactData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    submitForm() {
        console.log('Form Submitted:', this.contactData);
        alert('Thank you for your message! Our team will get back to you soon.');
        this.contactData = { name: '', email: '', subject: '', message: '' };
    }
}
