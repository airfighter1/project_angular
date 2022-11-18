import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PdtdetailsComponent } from './pdtdetails/pdtdetails.component';



@NgModule({
  declarations: [
    HomeComponent,
    PdtdetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
