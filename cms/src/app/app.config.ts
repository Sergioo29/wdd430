import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: "AIzaSyAizRk7L0gDjcn5vwI_gwG9hpYUlUfVm6Q",
  authDomain: "wdd430-angular-cms-3f260.firebaseapp.com",
  databaseURL: "https://wdd430-angular-cms-3f260-default-rtdb.firebaseio.com",
  projectId: "wdd430-angular-cms-3f260",
  storageBucket: "wdd430-angular-cms-3f260.firebasestorage.app",
  messagingSenderId: "1016790437337",
  appId: "1:1016790437337:web:541c4522fc3ec4f9979dc8"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Keep existing routes
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase())
  ]
};
