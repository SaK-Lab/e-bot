// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

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




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThinklistComponent,
    ThinklistInputComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
