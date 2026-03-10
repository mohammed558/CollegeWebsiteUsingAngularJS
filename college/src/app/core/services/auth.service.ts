import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class AuthService {
    private baseUrl = 'https://college-website-using-angular-js.vercel.app/api/auth';
    constructor(private http: HttpClient) { }
    login(credentials: any) {
        return this.http.post<any>(`${this.baseUrl}/login`, credentials).pipe(
            tap(res => {
                if (res.token) localStorage.setItem('token', res.token);
            })
        );
    }
    logout() { localStorage.removeItem('token'); }
    isLoggedIn() { return !!localStorage.getItem('token'); }
}