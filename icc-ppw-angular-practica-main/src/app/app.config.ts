import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};

const firebaseConfig = {
  apiKey: "AIzaSyBP1ONUFe3mOJ6rJvcwkV3I6IjtjUHBTqg",
  authDomain: "practica-web-f2ded.firebaseapp.com",
  databaseURL: "https://practica-web-f2ded-default-rtdb.firebaseio.com",
  projectId: "practica-web-f2ded",
  storageBucket: "practica-web-f2ded.firebasestorage.app",
  messagingSenderId: "172553139104",
  appId: "1:172553139104:web:ac4084885f5bbb8db76ac5"
};
