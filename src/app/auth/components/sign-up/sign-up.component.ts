import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private api: AppwriteService, private router: Router) { }

  signUp(signUpForm: NgForm) {
    const { email, password, name } = signUpForm.value;
    const user = this.api.createAccount(email, password, name);
    user.then(() => {
      this.router.navigate(['/auth/sign-in'])
      console.log("Account Created Succesfully")
    })
  }

}
