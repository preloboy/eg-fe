import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { AppwriteService } from 'src/app/services/appwrite/appwrite.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private api: AppwriteService, private router: Router, private auth: AuthComponent) { }

  signIn(signInForm: NgForm) {
    const { email, password } = signInForm.value;
    const promise = this.api.createEmailSession(email, password);
    promise.then(() => {
      this.router.navigate(['/dashboard'])
      console.log("Succesfully Logged In")
    }).catch((error) => {
      console.log(error.response.message)
      const { type, message } = error.response
      this.auth.showAlert(type, message)
      console.log(type)
    })
  }
}
