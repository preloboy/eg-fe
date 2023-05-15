import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppwriteService } from 'src/app/services/appwrite/appwrite.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private api: AppwriteService, private router: Router) { }

  signIn(signInForm: NgForm) {
    const { email, password } = signInForm.value;
    const promise = this.api.createEmailSession(email, password);
    promise.then(() => {
      this.router.navigate(['/dashboard'])
      console.log("Logged In")
    }).catch((error) => { 
      console.log(error.response.message)
     })
  }
}
