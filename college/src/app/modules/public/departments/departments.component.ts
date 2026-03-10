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
    constructor(private api: ApiService) { }
    ngOnInit() {
        this.api.getDepartments().subscribe((data: any) => {
            this.departments = data;
        });
    }
}