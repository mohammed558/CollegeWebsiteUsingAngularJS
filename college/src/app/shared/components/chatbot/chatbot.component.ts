import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
    selector: 'app-chatbot',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './chatbot.component.html',
    styles: [`
    .chat-window { height: 400px; overflow-y: auto; scrollbar-width: none; }
    .chat-window::-webkit-scrollbar { display: none; }
  `]
})
export class ChatbotComponent {
    userInput = '';
    messages: { text: string; sender: 'user' | 'bot' }[] = [
        { text: 'Hello! I am your AI campus assistant. How can I facilitate your journey today?', sender: 'bot' }
    ];
    isOpen = false;
    isTyping = false;

    constructor(private api: ApiService) { }

    toggleChat() { this.isOpen = !this.isOpen; }

    async sendMessage() {
        if (!this.userInput.trim()) return;

        const userMsg = this.userInput;
        this.messages.push({ text: userMsg, sender: 'user' });
        this.userInput = '';

        this.isTyping = true;
        this.api.sendMessage(userMsg).subscribe({
            next: (res: any) => {
                this.isTyping = false;
                this.messages.push({ text: res.reply, sender: 'bot' });
                this.scrollToBottom();
            },
            error: () => {
                this.isTyping = false;
                this.messages.push({ text: "I'm having trouble connecting right now. Please try again later.", sender: 'bot' });
            }
        });
    }

    private scrollToBottom() {
        setTimeout(() => {
            const win = document.querySelector('.chat-window');
            if (win) win.scrollTop = win.scrollHeight;
        }, 100);
    }
}