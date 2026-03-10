import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // Fixed import
bootstrapApplication(AppComponent, appConfig) // Fixed usage
  .catch((err) => console.error(err));