import { Component } from '@angular/core';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  showAlert = false;
  alertType: string;
  alertMessage: string;

  constructor() {
    this.alertMessage = '';
    this.alertType = '';
  }

  setAlert(type: string, message: string) {
    this.alertType = type;
    this.alertMessage = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }

}
