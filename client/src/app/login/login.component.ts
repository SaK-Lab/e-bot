import { Component, OnInit } from '@angular/core';
import { Login } from '../models/Login';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/finally';
import { Router } from '@angular/router';


// Service
import { AuthService } from '../services/auth.service';



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
    private _auth: AuthService,
    private _fb: FormBuilder,
    private _router: Router
  ) { }


  ngOnInit() {
      this.initForm();
  }

  initForm(): void {
    this.loginForm = this._fb.group({
        'user_name': this.username,
        'password': this.password
    });
  }

  onSubmitLogin(loginData: Login): void {
    this._auth.signIn(loginData)
        .subscribe(
            succ => {
                console.log(succ);
                localStorage.setItem('user_id', succ.user_id);
                localStorage.setItem('token', succ.token);
            },
            err => console.log(err),
            () => {
                this._router.navigateByUrl('/think');
            }
        );
  }

}
