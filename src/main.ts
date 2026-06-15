import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { PresentacionComponent } from './app/components/presentacion/presentacion.component';


bootstrapApplication(AppComponent, appConfig
);