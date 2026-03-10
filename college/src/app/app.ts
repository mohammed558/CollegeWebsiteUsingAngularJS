import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ChatbotComponent } from './shared/components/chatbot/chatbot.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ChatbotComponent],
  template: `
    <main class="min-h-screen relative">
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
      <app-chatbot></app-chatbot>
    </main>
  `
})
export class AppComponent { }