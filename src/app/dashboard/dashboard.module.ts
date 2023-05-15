import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CspsComponent } from './components/csps/csps.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CspsComponent
  ],
  imports: [
    CommonModule,
    // RouterModule
  ]
})
export class DashboardModule { }
