import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Material Modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserAnimationsModule,  
  ],
  declarations: [

  ]
})
export class HomeModule { }
