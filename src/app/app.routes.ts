import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    {path: 'login', component: LoginComponent },
    {path: 'signup', component: RegistrationComponent },
    {path: '**', component: PagenotfoundComponent},
];
