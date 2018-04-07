// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ThinklistComponent } from './thinklist/thinklist.component';
import { ThinklistInputComponent } from './thinklist/thinklist-input/thinklist-input.component';
import { ChatComponent } from './chat/chat.component';

// Services
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './services/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { ThinkService } from './thinklist/think.service';
import { MsgComponent } from './chat/msg/msg.component';
import { MsgService } from './chat/msg.service';
import { MsgItemComponent } from './chat/msg-item/msg-item.component';
import { MsgHostDirective } from './msg-host.directive';

// AngularMaterial
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThinklistComponent,
    ThinklistInputComponent,
    ChatComponent,
    SignupComponent,
    MsgComponent,
    MsgItemComponent,
    MsgHostDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /* Angular Material */
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    AuthService,
    ThinkService,
    MsgService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }
 ],
 entryComponents: [MsgItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
