import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CspsComponent } from './dashboard/components/csps/csps.component';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { RecoverComponent } from './auth/components/recover/recover.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: 'auth', component: AuthComponent, children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'recover', component: RecoverComponent },
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'csps', component: CspsComponent }
    ]
  },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
