import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    email = '';
    password = '';
    constructor(private auth: AuthService, private router: Router) { }
    login() {
        this.auth.login({ email: this.email, password: this.password }).subscribe(res => {
            alert('Login Successful!');
            this.router.navigate(['/']);
        }, err => alert('Invalid credentials'));
    }
}