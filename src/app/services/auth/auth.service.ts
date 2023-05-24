import { Injectable } from '@angular/core';
import { AppwriteService } from '../appwrite/appwrite.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: AppwriteService) { }

  isAuthenticated(): boolean {
    // Check if the user is authenticated using Appwrite's SDK or any other mechanism you've implemented
    return this.api.isLoggedIn();
  }

}
