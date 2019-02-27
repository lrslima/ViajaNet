import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
