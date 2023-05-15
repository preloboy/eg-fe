import { Component } from '@angular/core';
import { AppwriteService } from 'src/app/services/appwrite/appwrite.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  title = 'Dashboard'

  constructor(private api:AppwriteService){}



  signOut(){
    // this.api.deleteSession(sessionId)
    console.log(this.api.getSession())
  }

}
