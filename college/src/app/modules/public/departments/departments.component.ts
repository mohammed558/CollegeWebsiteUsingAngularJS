import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
@Component({
    selector: 'app-departments',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './departments.component.html'
})
export class DepartmentsComponent implements OnInit {
    departments: any[] = [];
    loading = true;
    error = '';
    constructor(private api: ApiService) { }
    ngOnInit() {
        this.api.getDepartments().subscribe({
            next: (data: any) => {
                this.departments = data;
                this.loading = false;
            },
            error: (err) => {
                this.error = 'Failed to load departments. Please try again later.';
                this.loading = false;
                console.error('Departments error:', err);
            }
        });
    }
}