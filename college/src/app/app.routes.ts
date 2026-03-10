import { Routes } from '@angular/router';
import { HomeComponent } from './modules/public/home/home.component';
import { LoginComponent } from './modules/public/login/login.component';
import { DepartmentsComponent } from './modules/public/departments/departments.component';
import { EventsComponent } from './modules/public/events/events.component';
import { AboutComponent } from './modules/public/about/about.component';
import { ContactComponent } from './modules/public/contact/contact.component';
import { AdmissionsComponent } from './modules/public/admissions/admissions.component';
import { StudentDashboardComponent } from './modules/student/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'departments', component: DepartmentsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admissions', component: AdmissionsComponent },
    { path: 'dashboard', component: StudentDashboardComponent },
    { path: '**', redirectTo: '' }
];