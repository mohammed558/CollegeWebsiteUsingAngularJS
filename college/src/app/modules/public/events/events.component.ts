import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';

@Component({
    selector: 'app-events',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
    events: any[] = [];

    constructor(private api: ApiService) { }

    ngOnInit() {
        this.api.getEvents().subscribe((data: any) => {
            this.events = data;
        });
    }
}
