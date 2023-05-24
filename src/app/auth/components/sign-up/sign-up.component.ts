import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { AppwriteService } from 'src/app/services/appwrite/appwrite.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  email: any;
  password: any;
  name: any;

  constructor(private api: AppwriteService, private router: Router, private auth:AuthComponent) { }

  signUp(signUpForm: NgForm) {
    const { email, password, name } = signUpForm.value;
    const user = this.api.createAccount(email, password, name);
    user.then(() => {
      this.router.navigate(['/auth/sign-in'])
      console.log("Account Created Succesfully")
    }).catch((error) => {
      // console.log(error.response.message)
      const { type, message } = error.response
      this.auth.showAlert(type, message)
      console.log(type)
    })
  }

}
