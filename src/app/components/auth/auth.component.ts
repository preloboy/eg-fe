import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  alert: boolean = false
  alertType: string = 'Type';
  alertMessage: string = 'Message';

  constructor(private service: GlobalService) { }

  showAlert(type: string, message: string) {
    this.alertType = type;
    this.alertMessage = message;
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }

}
