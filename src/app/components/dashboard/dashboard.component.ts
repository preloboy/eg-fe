import { Component } from '@angular/core';
import { AppwriteService } from 'src/app/services/appwrite/appwrite.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Dashboard'

  constructor(private api: AppwriteService) { }



  signOut() {
    const currentSession = this.api.getSession()
    currentSession.then((response) => {
      const sessionId = response.$id
      console.log(response)
      this.api.deleteSession(sessionId)
    })
    // console.log(response)
  }

}
