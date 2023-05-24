import { Injectable } from '@angular/core';
import { Account, Client, Databases, ID } from 'appwrite';
import { environment } from 'src/environments/environment';

const client = new Client();

client
  .setEndpoint(environment.APP_ENDPOINT)
  .setProject(environment.APP_PROJECT); 

const account = new Account(client);

@Injectable({
  providedIn: 'root'
})

export class AppwriteService {

  constructor() { }

  isLoggedIn(): boolean {
    // Check if the user is logged in using Appwrite's SDK or any other mechanism you've implemented
    return account.get() !== null;
  }

  createAccount(email: string, password: string, name: string | undefined) {
    return account.create(ID.unique(), email, password, name)
  }

  getSession(){
    return account.getSession('current')
  }

  createEmailSession(email: string, password: string) {
    return account.createEmailSession(email, password)
  }

  deleteSession(sessionId: string) {
    return account.deleteSession(sessionId)
  }

}
