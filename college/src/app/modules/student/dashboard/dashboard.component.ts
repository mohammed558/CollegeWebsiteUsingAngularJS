import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-student-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html'
})
export class StudentDashboardComponent {
    student = { name: 'John Doe', roll: '2024CS01', attendance: '85%' };
    timetable = [
        { time: '09:00 AM', subject: 'Data Structures' },
        { time: '11:30 AM', subject: 'Machine Learning' }
    ];
}