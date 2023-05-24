import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
      return false;
    }

    // The user is authenticated, so return true
    return true;
  }

  // canActivateRoute(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if (this.authService.isAuthenticated()) {
  //     return true;
  //   } else {
  //     // Redirect the user to the login page
  //     this.router.navigate(['/sign-in']);
  //     return false;
  //   }
  // }

}
