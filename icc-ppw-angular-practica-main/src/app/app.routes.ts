import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';
import { SignupPage } from './features/signup-page/signup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';
import {ProjectConfigPage} from './features/project/pages/project-config-page/project-config-page';
import { UiComponentsPage } from './features/ui-components/pages/ui-components-page/ui-components-page';
import {SimpsonsPage} from './features/simpsons/pages/simpsons-page/simpsons-page';
import { SimpsonDetailPageComponent } from './features/simpsons/pages/simpson-detail-page/simpson-detail-page';
import { AuthPage } from './features/auth/pages/auth-page/auth-page';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';
import { FavoritesService } from './core/services/favorites.service';


export const routes: Routes = [
    { path: '', component: HomePage, canActivate: [guestGuard] },
    { path: 'students', component: StudentPage, canActivate: [guestGuard] },
    { path: 'students/:id', component: StudentDetailPage, canActivate: [guestGuard] },
    { path: 'layouts', component: LayoutsPage, canActivate: [guestGuard] },
    { path: 'signup', component: SignupPage, canActivate: [guestGuard] },
    { path: 'profile', component: ProfilePage, canActivate: [guestGuard] },
    { path: 'project-config', component: ProjectConfigPage, canActivate: [guestGuard] },
    { path: 'ui-components', component: UiComponentsPage, canActivate: [guestGuard] },
    { path: 'simpsons', component: SimpsonsPage, canActivate: [guestGuard] },
    { path: 'simpsons/:id', component: SimpsonDetailPageComponent, canActivate: [guestGuard] },
    { path: 'auth', component: AuthPage, canActivate: [guestGuard] },
    { path: 'auth', component: AuthPage, canActivate: [guestGuard] },
    { path: '', component: HomePage, canActivate: [guestGuard] },
    { path: 'auth', component: AuthPage, canActivate: [guestGuard] },
    { path: 'favorites', component: FavoritesService, canActivate: [authGuard] },
    { path: 'simpsons/:id', component: SimpsonDetailPageComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: '' }
];
