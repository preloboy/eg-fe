import { Injectable } from '@angular/core';
import { Account, Client, Databases, AppwriteException, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://8080-appwrite-integrationfor-p1i8tjf531t.ws-us97.gitpod.io/v1')
  .setProject('egs-be');

const account = new Account(client);

@Injectable({
  providedIn: 'root'
})

export class AppwriteService {

  constructor() { }

  createAccount(email: string, password: string, name: string | undefined) {
    return account.create(ID.unique(), email, password, name)
  }

  getSession(){
    return account.get()
  }

  createEmailSession(email: string, password: string) {
    return account.createEmailSession(email, password)
  }

  deleteSession(sessionId: string) {
    return account.deleteSession(sessionId)
  }

}
