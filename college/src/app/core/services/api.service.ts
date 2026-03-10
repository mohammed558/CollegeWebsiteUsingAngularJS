import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class ApiService {
    private baseUrl = 'https://college-website-using-angular-js.vercel.app/api';
    constructor(private http: HttpClient) { }
    getDepartments() { return this.http.get(`${this.baseUrl}/college/departments`); }
    getEvents() { return this.http.get(`${this.baseUrl}/college/events`); }
    sendMessage(message: string) { return this.http.post(`${this.baseUrl}/chat`, { message }); }
}