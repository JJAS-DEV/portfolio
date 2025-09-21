import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { PresentacionComponent } from './app/components/presentacion/presentacion.component';
const routes: Routes = [
  { path: 'presentacion', component: PresentacionComponent },
  { path: '', redirectTo: '/presentacion', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({ anchorScrolling: 'enabled' }) // 👈 scroll automático a fragmentos
    )
  ]
});