import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <nav class="glass sticky top-4 mx-4 md:mx-6 rounded-2xl px-6 md:px-8 py-4 flex justify-between items-center z-50 transition-all duration-300">
        <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-brand-primary/10">M</div>
            <span class="text-xl font-bold font-display tracking-tight text-slate-800">Modern <span class="text-brand-primary hidden sm:inline">University</span></span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-slate-600">
            <a routerLink="/" routerLinkActive="text-brand-primary font-bold" [routerLinkActiveOptions]="{exact: true}" class="hover:text-brand-primary transition-colors">Home</a>
            <a routerLink="/about" routerLinkActive="text-brand-primary font-bold" class="hover:text-brand-primary transition-colors">About</a>
            <a routerLink="/departments" routerLinkActive="text-brand-primary font-bold" class="hover:text-brand-primary transition-colors">Departments</a>
            <a routerLink="/events" routerLinkActive="text-brand-primary font-bold" class="hover:text-brand-primary transition-colors">Events</a>
            <a routerLink="/contact" routerLinkActive="text-brand-primary font-bold" class="hover:text-brand-primary transition-colors">Contact</a>
            <a routerLink="/admissions" routerLinkActive="text-brand-primary font-bold" class="hover:text-brand-primary transition-colors">Admissions</a>
            <a routerLink="/login" class="bg-brand-primary text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Portal
            </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button (click)="isMenuOpen = !isMenuOpen" class="lg:hidden p-2 text-slate-600 hover:text-brand-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path *ngIf="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path *ngIf="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <!-- Mobile Menu Overlay -->
        <div *ngIf="isMenuOpen" class="fixed inset-0 top-[88px] mx-4 bg-white z-40 lg:hidden rounded-3xl p-8 flex flex-col gap-6 shadow-2xl animate-fade-up border border-slate-100">
            <a routerLink="/" (click)="isMenuOpen = false" class="text-xl font-bold text-slate-800">Home</a>
            <a routerLink="/about" (click)="isMenuOpen = false" class="text-xl font-bold text-slate-800">About</a>
            <a routerLink="/departments" (click)="isMenuOpen = false" class="text-xl font-bold text-slate-800">Departments</a>
            <a routerLink="/events" (click)="isMenuOpen = false" class="text-xl font-bold text-slate-800">Events</a>
            <a routerLink="/contact" (click)="isMenuOpen = false" class="text-xl font-bold text-slate-800">Contact</a>
            <a routerLink="/admissions" (click)="isMenuOpen = false" class="text-xl font-bold text-slate-800">Admissions</a>
            <hr class="border-slate-100">
            <a routerLink="/login" (click)="isMenuOpen = false" class="bg-brand-primary text-white px-6 py-4 rounded-2xl font-bold text-center shadow-lg">Student Portal</a>
        </div>
    </nav>
  `
})
export class NavbarComponent {
    isMenuOpen = false;
}
