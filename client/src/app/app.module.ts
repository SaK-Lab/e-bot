import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ThinklistComponent } from './thinklist/thinklist.component';

import { LoginService } from './login/login.service';
import { ThinklistInputComponent } from './thinklist/thinklist-input/thinklist-input.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThinklistComponent,
    ThinklistInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
