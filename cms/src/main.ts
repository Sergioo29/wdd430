import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import HttpClient provider
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // ✅ Add HttpClient provider
  ],
});
