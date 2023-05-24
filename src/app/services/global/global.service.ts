import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  showAlert: boolean = false;
  alertType: string = '';
  alertMessage: string = '';

  constructor() { }

  setAlert(type: string, message: string) {
    this.alertType = type;
    this.alertMessage = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }

}
