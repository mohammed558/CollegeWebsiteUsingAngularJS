import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admissions',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admissions.component.html'
})
export class AdmissionsComponent {
    steps = [
        { title: 'Online Application', desc: 'Complete the digital application form with your academic credentials.' },
        { title: 'Document Verification', desc: 'Our team will review your transcripts and proof of identification.' },
        { title: 'Entrance Assessment', desc: 'Participate in our global entrance test and interview process.' },
        { title: 'Final Enrollment', desc: 'Secure your seat by paying the admission fee and completing the orientation.' }
    ];
}
