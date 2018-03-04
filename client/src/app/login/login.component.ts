import { Component, OnInit } from '@angular/core';
import { Login } from '../models/Login';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username = new FormControl();
    password = new FormControl();
    loginForm: FormGroup;

  constructor(
     private _fb: FormBuilder
  ) { }


  ngOnInit() {
      this.initForm();
  }

  initForm(): void {
    this.loginForm = this._fb.group({
        'password': this.password,
        'user_name': this.username
    });
  }

  onSubmitLogin(loginData: Login): void {
    console.log(loginData);
  }

}
